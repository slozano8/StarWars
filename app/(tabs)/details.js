import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

// ... (other imports)

const HomeScreen = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PlanetDetail', { planet: item })}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SwipeListView
      data={planets}
      renderItem={renderItem}
      renderHiddenItem={() => (
        <View style={{ backgroundColor: 'red', alignItems: 'flex-end' }}>
          <Text style={{ color: 'white' }}>Delete</Text>
        </View>
      )}
      disableRightSwipe={true}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

const PlanetDetailScreen = ({ route }) => {
  const { planet } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{planet.name}</Text>
      <Text>{planet.climate}</Text>
      {/* ... other details ... */}
    </View>
  );
};