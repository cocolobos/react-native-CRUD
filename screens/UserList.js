import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, Button } from 'react-native';
import firebase from "../dataBase/firebase";
import { ListItem, Avatar } from "react-native-elements";

const UserList = (props) => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    firebase.db.collection('user').onSnapshot(querySnapshot => {
      const users = [];
      querySnapshot.docs.forEach(doc => {
        const {name, email, phone} = doc.data();
        users.push(({
          id: doc.id,
          name,
          email,
          phone
        }));
      })
      setUsers(users);
    })
  }, []);

  return(
    <ScrollView>
      <Button title="Create User" onPress={() => props.navigation.navigate("CreateUser")} />
      {
        users.map((user) =>   {
          return (
            <ListItem
              key={user.id}
              bottomDivider
              onPress={() => props.navigation.navigate("UserDetail", { userId: user.id })}
            >
              <ListItem.Chevron />
              <Avatar source={{ uri: "data:image/png;base64,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"}} rounded />
              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserList