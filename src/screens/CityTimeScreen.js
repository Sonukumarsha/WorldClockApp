import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TimeDisplay from '../components/TimeDisplay';

const CityTimeScreen = ({ route }) => {
  const { city } = route.params;
  
  return (
    <ScrollView style={styles.container}>
      <TimeDisplay city={city} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default CityTimeScreen;