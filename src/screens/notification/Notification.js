import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-paper';
import {PRIMARY_COLOR} from '../../common/navigation/utils/color';
import NotificationCard from '../../components/NotificationCard';
const Notification = ({navigation}) => {
  const notificationcontent = [
    {
      title: 'Your activity',
      time: '1 minutes ago',
      description: 'Do not forget to log your workout and weight everyday.',
    },
    {
      title: 'Response from community ',
      time: '1 Day ago',
      description:
        'Hey, there its been nice to see your achievements last day, which training exactly did you ',
    },
    {
      title: 'Gymproluxe ',
      time: '2 Days ago',
      description: 'A new workout is out, try it out.',
    },
  ];
  const gradientColors = ['#0A0A16', '#0A0A16'];
  const [notificationstate, setNotificationstate] =
    useState(notificationcontent);
  const clearState = () => {
    setNotificationstate([]);
  };
  const goBackToHome = () => {
    navigation.navigate('profile');
  };
  const windowHeight = Dimensions.get('window').height;

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <FlatList
        style={styles.flatList}
        data={notificationstate}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NotificationCard data={item} />}
      />

      <View style={styles.buttoncontainer}>
        {notificationstate.length === 0 ? (
          <View
            style={[styles.noNotificationcontainer, styles.buttonContainer]}>
            <Text style={styles.text}>There are no notifications found.</Text>
            <Button style={styles.button} onPress={goBackToHome}>
              Go back to home
            </Button>
          </View>
        ) : (
          <Button style={styles.stateclearbutton} onPress={clearState}>
            State clear
          </Button>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
  flatList: {
    width: '90%',
  },
  buttonContainer: {
    bottom: Dimensions.get('window').height / 2 - 30,
  },
  buttoncontainer: {
    width: '100%',
    alignItems: 'center',
  },
  stateclearbutton: {
    width: '80%',
    color: '#1D192B',
    backgroundColor: '#85E0A3',
    paddingVertical: 10,
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 40,
    borderRadius: 30,
  },
  button: {
    fontFamily: 'roboto',
    fontWeight: '500',
    width: '80%',
    color: '#1D192B',
    backgroundColor: '#85E0A3',
    paddingVertical: 10,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 30,
  },

  text: {
    textAlign: 'center',
    color: '#938F99',
    marginBottom: 16,
  },
  noNotificationcontainer: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Notification;
