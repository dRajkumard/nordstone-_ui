import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Avatar} from 'react-native-paper';
import {PRIMARY_COLOR} from '../../common/navigation/utils/color';
import {AvatarImage} from '../../common/navigation/utils/Images';
import NotificationCard from '../../components/NotificationCard';
import ProfileCard from '../../components/ProfileCard';
const Settings = ({navigation}) => {
  const gradientColors = ['#0A0A16', '#0A0A16'];
  const settingsItems = [
    {
      title: 'Password',
      icon: 'settings',
      // right: true,
    },
    {
      title: 'Membership settings',
     
    },
    {
      title: 'Sign out my account',
     
    },
    
  ];
  const navigateToEditProfile = () => {
    // Navigate to the EditProfile screen
    navigation.navigate('EditProfile'); // Replace 'EditProfile' with the name of your Edit Profile screen
  };
  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.userDetailcontainer}>
      <FlatList
        data={settingsItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ProfileCard data={item} navigation={navigation}/>}
      />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
  userDetailcontainer: {
    marginTop:'25%',
    // marginBottom:'10%',
  }
  
 
});

export default Settings;
