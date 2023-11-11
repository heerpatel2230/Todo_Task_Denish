import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from '../Screens/TodoList/index.js';
const Stack = createNativeStackNavigator();
const MainNav = () => {
  return (
    <Stack.Navigator initialRouteName="TodoList">
      <Stack.Screen
        name="TodoList"
        component={TodoList}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNav;
