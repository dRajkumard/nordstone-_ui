import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from './src/screens/notification/Notification';
const Stack = createNativeStackNavigator();

export default function AppRoot() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
