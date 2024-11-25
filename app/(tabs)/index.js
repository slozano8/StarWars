import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    setSearchText(text);
    // Implement search logic here, e.g., filtering data
    // ...
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setFilteredData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/starwars.png')} 
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>STARWARS APP by Santos</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search Website"
        onChangeText={handleSearch}
        value={searchText}
        clearButtonMode="while-editing"
      />

      <FlatList
      
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>{item.name}</Text>
            {/* Add more details as needed */}
          </View>
        )}
        keyExtractor={(item) => item.url}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  searchBar: {
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 10,
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
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;