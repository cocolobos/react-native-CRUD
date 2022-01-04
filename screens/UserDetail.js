import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetail = () => {
  return(
    <View style={styles.container}>
      <Text>User Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserDetail