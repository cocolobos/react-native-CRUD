import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './screens/UserList';
import CreateUser from './screens/CreateUser';
import UserDetail from './screens/UserDetail';

const Stack = createNativeStackNavigator ();

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} options={{ title: "User List"}}/>
      <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: "Add New User"}} />
      <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: "User Detail"}} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
