import { Image, StyleSheet,} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/planets.png')}
          style={styles.space}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Planets</ThemedText>
       </ThemedView>
    </ParallaxScrollView>
  );
}

const fetchPlanets = async () => {
  const response = await axios.get('https://swapi.dev/api/planets/1');
  const data = await response.data;
  return data.results;
};

const PlanetScreen = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanetsData = async () => {
      const fetchedPlanets = await fetchPlanets();
      setPlanets(fetchedPlanets);
    };

    fetchPlanetsData();
  }, []);

  return (
    <FlatList
      data={planets}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          {/* Add more details as needed */}
        </View>
      )}
      keyExtractor={(item) => item.url}
    />
  );
};



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  space: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});
