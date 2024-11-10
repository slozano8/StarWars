
import { StyleSheet, Image, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const [spaceships, setSpaceships] = useState([]);

  useEffect(() => {
    const fetchSpaceshipsData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/spaceships/');
        const data = await response.data.results;
        setSpaceships(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchSpaceshipsData();   
  
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image
        source={require('@/assets/images/spaceships.png')}
        style={styles.reactLogo} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Spaceships</ThemedText>
      </ThemedView>
      {/* Pass the fetched data as a prop to the Spaceships component */}
      <Spaceships spaceships={spaceships} />
    </ParallaxScrollView>
  );
};

const Spaceships = ({ spaceships }) => {
  // No need for separate state here as data comes from a prop

  return (
    <FlatList
      data={spaceships}
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
  reactLogo: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
