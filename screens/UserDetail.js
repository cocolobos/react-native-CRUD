import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import firebase from "../dataBase/firebase";

const UserDetail = (props) => {

  const [user, setUserState] = useState({
    id: "id",
    name: "",
    email: "",
    phone: ""
  });

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("user").doc(id)
    const doc = await dbRef.get();
    const user = doc.data();
    setUserState({
      ...user,
      id: doc.id
    })
  }
  
  useEffect (() => {
    getUserById(props.route.params.userId)
  }, [])

  const handleChangeText = (name, value) => {
    setUserState({ ...user, [name]: value })
  }

  const deleteUser = async () => {
    const dbRef = firebase.db.collection('user').doc(props.route.params.userId);
    await dbRef.delete();
    console.log("hello")
    props.navigation.navigate('UserList');
  }

  return(
    <ScrollView style={styles.container}>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Name User" value={user.name} onChangeText={(value) => handleChangeText('name', value)} />
      </View>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Email User" value={user.email} onChangeText={(value) => handleChangeText('email', value)} />
      </View>
      <View style={styles.inputSelector}>
        <TextInput placeholder="Phone User" value={user.phone} onChangeText={(value) => handleChangeText('phone', value)} />
      </View>
      <View style={styles.btnSelector}>
        <Button color="green" title="Update User" onPress={() => alert("hello")} />
      </View>
      <View style={styles.btnSelector}>
        <Button color="red" title="Delete User" onPress={() => deleteUser()} />
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
  btnSelector: {
    margin: 10
  },
});

export default UserDetail