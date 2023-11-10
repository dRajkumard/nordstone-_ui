import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY_COLOR} from '../../common/navigation/utils/color';

import ProfileCard from '../../components/ProfileCard';
const Settings = ({navigation}) => {
  const gradientColors = ['#0A0A16', '#0A0A16'];
  const settingsItems = [
    {
      title: 'Password',
      icon: 'settings',
    },
    {
      title: 'Membership settings',
    },
    {
      title: 'Sign out my account',
    },
  ];

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
          renderItem={({item}) => (
            <ProfileCard data={item} navigation={navigation} />
          )}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

    backgroundColor: PRIMARY_COLOR,
  },
  userDetailcontainer: {
    marginTop: '25%',
  },
});

export default Settings;
