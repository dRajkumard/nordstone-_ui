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
const Profile = ({navigation}) => {
  const gradientColors = ['#0A0A16', '#0A0A16'];
  const profileItems = [
    {
      title: 'Notifications',
      icon: 'notifications',
      right: true,
    },
    {
      title: 'Settings',
      icon: 'settings',
      right: false,
    },
    {
      title: 'Fitness Preferences',
      icon: 'barcode',
      right: false,
    },
    {
        title: 'chat with support',
        icon: 'chatbox',
        right: false,
      },
  ];
  const navigateToEditProfile = () => {
    // Navigate to the EditProfile screen
    navigation.navigate('updateProfile'); // Replace 'EditProfile' with the name of your Edit Profile screen
  };
  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.userDetailcontainer}>
        <View style={styles.userDetails}>
          <Image source={AvatarImage} style={styles.avatarImage} />
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>Kevin Smith</Text>
            <Text style={styles.userDetails}>keving@smith.co.uk</Text>
          </View>
        </View>
        <TouchableOpacity onPress={navigateToEditProfile}>
            <Text style={[styles.userDetails, styles.edit]}>Edit</Text>
          </TouchableOpacity>
      </View>
      <FlatList
        data={profileItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ProfileCard data={item} navigation={navigation}/>}
      />
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
    marginTop:'5%',
    marginBottom:'10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center'
  },
  avatarImage: {
    width: 64,
    heighe: 64,
  },
  userDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    marginLeft: 17,
    color: '#AEB3B8',
    fontWeight: '400',
  },
  edit: {
    fontSize: 12,
    fontWeight: '400',
    color: '#87868A',
  },
  userContainer: {
    justifyContent: 'space-around',
  },
});

export default Profile;
