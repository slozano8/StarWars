import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const FilmsScreen = () => {
  const [films, setFilms] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await axios.get('https://swapi.dev/api/films/');
      setFilms(response.data.results);
    };

    fetchFilms();
  }, []);

  const handleFilmPress = (film) => {
    navigation.navigate('films', { film });
  };

  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/films.png')} // Replace with your image path
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* FlatList for displaying films */}
      <FlatList
        data={films}
        renderItem={({ item }) => (
          <ScrollView>
          <View style={styles.listItem}>
            <View style={styles.listItemContent}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listEpisodeId}>{item.episode_id}</Text>
              <Text style={styles.listOpening}>{item.opening_crawl}</Text>
              <Text style={styles.listDirector}>{item.director}</Text>
              <Text style={styles.listProducer}>{item.producer}</Text>
              <Text style={styles.listRelease}>{item.release_date}</Text>
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
    flex: 1, 
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
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listItemDescription: {
    fontSize: 14,
  },
});

export default FilmsScreen;