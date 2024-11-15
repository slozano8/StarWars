
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

const Spaceships = () => {
  const [spaceships, setSpaceships] = useState([]);

  useEffect(() => {
    const fetchSpaceships = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/');
      setSpaceships(response.data.results);
    };

    fetchSpaceships();
  }, []);

  return (
      <FlatList
        data={spaceships}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.listItemContent}>
              <Text style={styles.ItemName}>{item.name}</Text>
              <Text style={styles.ItemModel}>{item.model}</Text>
              <Text style={styles.ItemClass}>{item.starship_class}</Text>
              <Text style={styles.ItemManufacturer}>{item.manufacturer}</Text>
              <Text style={styles.ItemCrew}>{item.crew}</Text>
              <Text style={styles.ItemPassengers}>{item.passengers}</Text>
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

  export default Spaceships;
