import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';
import   
 axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

export default function App({ width }) {
  const offset = useSharedValue(width / 2 - 160);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);   
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const [error, setError] = useState(null);   

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();   

  }, []);
     
  const   
  fetchData = async (query) => {
     setIsLoading(true);
     setError(null);
      if (isConnected)  {
      try {
        const response = await axios.get(`https://swapi.dev/api/${query}/`);
        setData(response.data.results);
        setFilteredData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      console.warn("NO INTERNET CONNECTION, data not fetched.");
    }
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      fetchData(searchText.trim().toLowerCase());
    }
  };

  const handleClear = () => {
    setSearchText('');
    setFilteredData([]);
  };

 



  return (
    <View style={styles.container}>
       { !isConnected && <Text style={styles.networkWarning}>No internet connection.</Text> }
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
        placeholder="Search SWAPI"
        onChangeText={setSearchText}
        value={searchText}
        clearButtonMode="while-editing"
      />

      <View style={styles.buttonContainer}>
        <Button title="Search" onPress={handleSearch} />
        <Button title="Clear" onPress={handleClear} />
      </View>

      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>{item.name || item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.url}
        style={styles.list}
      />

      <Animated.Image
        source={require('@/assets/images/rocket.png')}
        style={[styles.rocket, animatedStyles]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  rocket: {
    height: 100,
    width: 100,
  },
});