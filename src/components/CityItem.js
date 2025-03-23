import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { getCurrentTime } from '../utils/timeUtils';

const CityItem = ({ city,  navigation }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CityTime', { city })}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.cityName}>{city.name}</Text>
          <Text style={styles.countryName}>{city.country}</Text>
          <Text style={styles.currentTime}>{getCurrentTime(city.timezone)}</Text>
        </View>
        <View style={styles.iconContainer}>
          {/* <Image
            source={require('../../assets/clock.png')}
            style={styles.icon}
            defaultSource={require('../../assets/clock.png')}
          /> */}
          <Icon name="timer" size={24} color="#4a6ea9" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  countryName: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  currentTime: {
    fontSize: 16,
    color: '#4a6ea9',
    marginTop: 8,
    fontWeight: '500',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#4a6ea9',
  },
});

export default CityItem;