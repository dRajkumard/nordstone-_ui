import React, {useState} from 'react';
import {View, StyleSheet, Text, Switch, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  SECONDARY_COLOR,
  TERTIARY_COLOR,
} from '../common/navigation/utils/color';
import IonIcon from 'react-native-vector-icons/Ionicons';

const ProfileCard = ({data, navigation}) => {
  console.log('data', data);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const gradientColors = [
    'rgba(244, 249, 249, 0.10)',
    'rgba(244, 246, 249, 0)',
  ];
  const handleCardPress = () => {
    if (data.title === 'Settings') {
      navigation.navigate('settings');
    }
    if (data.title === 'Password') {
      navigation.navigate('updatePassword');
    }
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <LinearGradient
        colors={gradientColors}
        style={styles.linearGradient}
        start={{x: 0, y: 1}}>
        <View style={styles.cardContent}>
          <View style={styles.leftside}>
            {data.icon && (
              <View style={styles.iconContainer}>
                <IonIcon name={data.icon} size={24} style={styles.icon} />
              </View>
            )}

            <Text style={styles.title}>{data.title}</Text>
          </View>
          {data.right && (
            <Switch
              style={styles.switch}
              trackColor={{false: '#87868A', true: '#178B54'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#39393b'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              trackSize={{width: 56, height: 40}}
              thumbSize={38}
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
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
    marginTop: 8,
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftside: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'roboto',
    color: TERTIARY_COLOR,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 12,
  },
  iconContainer: {
    backgroundColor: '#F4F6F912',
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  icon: {
    color: '#B9BCC0',
  },
});

export default ProfileCard;
