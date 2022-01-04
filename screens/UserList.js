import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserList = () => {
  return(
    <View style={styles.container}>
      <Text>User List</Text>
    </View>
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