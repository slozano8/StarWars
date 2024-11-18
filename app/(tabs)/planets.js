import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

const Planets = () => {
  const [Planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await axios.get('https://swapi.dev/api/planets/');
      setPlanets(response.data.results);
    };

    fetchPlanets();
  }, []);

  return (
      <FlatList
        data={Planets}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.listItemContent}>
              <Text style={styles.ItemName}>{item.name}</Text>
              <Text style={styles.ItemDiameter}>{item.diameter}</Text>
              <Text style={styles.ItemRotation}>{item.rotation_period}</Text>
              <Text style={styles.ItemOrbital}>{item.orbital_period}</Text>
              <Text style={styles.ItemGravity}>{item.gravity}</Text>
              <Text style={styles.ItemPopulation}>{item.population}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.url}
        style={styles.list}
      />
    );
  };
 
  
  const styles = StyleSheet.create({
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
      elevation:   
   5,
    },
    listItemImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    ItemName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    listItemDescription: {
      fontSize: 14,
    },
  });

  export default Planets;