import {View, Image, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function DefaultHeader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftside}>
        <IonIcon name="chevron-back-outline" size={24} style={styles.icon} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <IonIcon name="ellipsis-vertical" size={24} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding:'5%',
    
    backgroundColor: 'black',
  },
  leftside: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily:'montserrat',
    fontWeight:'500',
    color: '#D6DED1',
    fontSize: 22,
    marginLeft:6.5,
    //   fontFamily:FONT_FAMILY_MEDIUM
  },
  icon: {
    color: '#D6DED1',
    margin: 8,
  },
});
