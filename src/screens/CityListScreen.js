import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import CityItem from '../components/CityItem';
import cities from '../data/cities';

const CityListScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setCitiesData(cities);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4a6ea9" />
      </View>
    );
  }

  const removeCity = cityId => {
    const updatedCities = citiesData.filter(city => city.id !== cityId);
    setCitiesData(updatedCities);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={citiesData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CityItem city={item} navigation={navigation} removeCity={removeCity} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingVertical: 10,
  },
});

export default CityListScreen;
