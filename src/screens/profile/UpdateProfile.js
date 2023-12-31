import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button, TextInput} from 'react-native-paper';
import {PRIMARY_COLOR} from '../../common/navigation/utils/color';
const UpdatePassword = ({navigation}) => {
  const gradientColors = [PRIMARY_COLOR, PRIMARY_COLOR];
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColors}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}></LinearGradient>
      <View style={styles.card}>
        <View>
          <Text style={styles.text}>Update Profile</Text>
        </View>
        <View>
          <TextInput
            style={styles.Input}
            label="Name"
            labelStyle={{color: '#49454F'}}
            placeholder
            theme={{
              colors: {
                primary: 'transparent',
                text: '#49454F',
                placeholder: 'white',
              },
            }}
            underlineColor="transparent"
            underlineColorAndroid="transparent"
          />

          <TextInput
            style={styles.Input}
            label="Email"
            labelStyle={{color: '#49454F'}}
            theme={{
              colors: {
                primary: 'transparent',
                text: '#49454F',
                placeholder: 'white',
              },
            }}
            underlineColor="transparent"
            underlineColorAndroid="transparent"
          />
        </View>
        <Button style={styles.button} labelStyle={{color: '#666971'}}>
          Change email address
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A16',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  card: {
    flex: 0.7,
    backgroundColor: '#1D1B20',
    paddingHorizontal: 30,
    paddingVertical: 35,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

    justifyContent: 'space-between',
    width: '100%',
  },

  text: {
    fontFamily: 'Montserrat',
    width: '100%',
    color: '#AEB3B8',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.2,

    fontStyle: 'normal',
    textAlign: 'left',
  },
  InputContainer: {
    width: '100%',
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
  },
  Input: {
    fontFamily: 'roboto',
    fontWeight: '400',
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: '#9F9F9F',
    borderWidth: 1,
    borderTopEndRadius: 16,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    borderTopStartRadius: 16,
    borderRadius: 20,
    marginTop: 20,
    color: '#9F9F9F',
  },

  button: {
    fontFamily: 'roboto',
    fontWeight: '500',
    width: '100%',
    height: 50,
    backgroundColor: '#85E0A3',
    color: '#666971',

    justifyContent: 'center',
  },
});

export default UpdatePassword;
