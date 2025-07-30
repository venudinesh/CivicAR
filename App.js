import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ARScreen from './screens/ARScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Civic Mirror AR" component={ARScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}