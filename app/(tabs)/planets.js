import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await axios.get('https://swapi.dev/api/planets/');
      setPlanets(response.data.results);
    };

    fetchPlanets();
  }, []);

  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/planets.png')} 
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* FlatList for displaying planets */}
      <FlatList
        data={planets}
        renderItem={({ item }) => (
          <ScrollView>
          <View style={styles.listItem}>
            <View style={styles.listItemContent}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDiameter}>{item.diameter}</Text>
              <Text style={styles.itemRotation}>{item.rotation_period}</Text>
              <Text style={styles.itemOrbital}>{item.orbital_period}</Text>
              <Text style={styles.itemGravity}>{item.gravity}</Text>
              <Text style={styles.itemPopulation}>{item.population}</Text>
            </View>
          </View>
          </ScrollView>
        )}
        keyExtractor={(item) => item.url}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the whole screen
  },
  imageContainer: {
    // Adjust styling for your image
    width: '100%',
    height: 200,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  list: {
    padding: 10,
  },
  listItem: {
    marginBottom: 10,
    backgroundColor: '#A1CEDC',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listItemImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listItemDescription: {
    fontSize: 14,
  },
});

export default Planets;