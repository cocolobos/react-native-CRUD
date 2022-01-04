import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';

const CreateUser = () => {

  const [userState, setState] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChangeText = (name, value) => {
    setState({ ...userState, [name]: value })
  }
  console.log("asd", userState)
  return(
    <ScrollView style={styles.container}>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Name User" onChange={(value) => handleChangeText('name', value)}/>
      </View>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Email User" onChange={(value) => handleChangeText('email', value)} />
      </View>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Phone User" onChange={(value) => handleChangeText('phone', value)} />
      </View>
      <View>
        <Button title="Save User" onPress={() => console.log("state", userState)}/>
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