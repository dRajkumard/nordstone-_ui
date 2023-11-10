import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SECONDARY_COLOR} from '../common/navigation/utils/color';

const NotificationCard = ({data}) => {
  console.log('data', data);
  const gradientColors = [
    'rgba(244, 248.82, 249, 0.10)',
    'rgba(244, 246, 249, 0)',
  ];
  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.linearGradient}
      start={{x: 0, y: 1}}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.time}>{data.time}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: 'black',
    borderWidth: 0.8,
    borderRadius: 16,
    borderColor: 'rgba(244, 246, 249, 0.20)',
    padding: 16,
    margin: 0.8,
    marginTop: 24,
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  title: {
    fontFamily: 'roboto',
    color: SECONDARY_COLOR,
    fontSize: 12,
    fontWeight: '500',
  },
  time: {
    fontFamily: 'roboto',
    color: '#9F9F9F',
    fontSize: 8,
    fontWeight: '400',
  },
  description: {
    fontFamily: 'roboto',
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default NotificationCard;
