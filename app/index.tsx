import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddExpenseScreen from './screens/AddExpenseScreen';
import HomeScreen1 from './screens/HomeScreen';


export default function HomeScreen() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    {/* <NavigationContainer> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen1} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      </Stack.Navigator>
    {/* </NavigationContainer> */}
  </Provider>
  );
}



