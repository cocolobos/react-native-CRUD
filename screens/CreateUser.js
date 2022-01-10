import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
import firebase from "../dataBase/firebase";

const CreateUser = (props) => {

  const [userState, setState] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChangeText = (name, value) => {
    setState({ ...userState, [name]: value })
  }

  const saveNewUser = async () => {
    if (userState.name === ''){
      alert("Please provide a name")
    } else {
      try{
         await firebase.db.collection("user").add({
          name: userState.name,
          email: userState.email,
          phone: userState.phone
        })
        props.navigation.navigate("UserList")
      }
      catch{
        alert("Error please reload the page")
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Name User" onChangeText={(value) => handleChangeText('name', value)} />
      </View>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Email User" onChangeText={(value) => handleChangeText('email', value)} />
      </View>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Phone User" onChangeText={(value) => handleChangeText('phone', value)} />
      </View>
      <View>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputSelector: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  },
});

export default CreateUser