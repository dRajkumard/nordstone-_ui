// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from './src/screens/notification/Notification';
import { HomeStack } from './src/common/navigation/RootStack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

export default App;