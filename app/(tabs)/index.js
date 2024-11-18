import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import axios from 'axios';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    // Search function will go here
    
    console.log('Search query:', text);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/assets/images/starwars.png')} resizeMode="cover" />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Star Wars APP</ThemedText>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchText}
        />
      </ThemedView>
      {/* ... rest of your content */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // ... other styles
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10, // Adjust border radius as needed
    padding: 10,
    backgroundColor: '#f2f2f2', // Background color
    color: '#333', // Text color
  },
});
