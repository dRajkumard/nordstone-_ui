import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Notification from '../../screens/notification/Notification';
import DefaultHeader from '../../components/DefaultHeader';
import Profile from '../../screens/profile/Profile';
import Settings from '../../screens/profile/Settings';
import UpdateProfile from '../../screens/profile/UpdateProfile';
import UpdatePassword from '../../screens/profile/UpdatePassword';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="notifications"
        component={Notification}
        options={({navigation}) => ({
          header: () => <DefaultHeader title="Notification" />,
        })}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={({navigation}) => ({
          header: () => <DefaultHeader title="Profile" />,
        })}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={({navigation}) => ({
          header: () => <DefaultHeader title="Settings" />,
        })}
      />
      <Stack.Screen
        name="updateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="updatePassword"
        component={UpdatePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
