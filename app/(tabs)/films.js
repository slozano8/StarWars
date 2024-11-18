import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
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
    <FlatList
      data={films}
      renderItem={({ item }) => (
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