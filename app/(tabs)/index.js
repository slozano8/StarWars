import { Image, StyleSheet,} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/starwars.png')}
          style={styles.space}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Star Wars APP</ThemedText>
       </ThemedView>
    </ParallaxScrollView>
  );
}



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  space: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});
