import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteMatchesScreen = () => {
  const [favoriteMatches, setFavoriteMatches] = useState([]);

  useEffect(() => {
    const loadFavoriteMatches = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favoriteMatches');
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        setFavoriteMatches(favorites);
      } catch (error) {
        console.error('Error loading favorite matches:', error);
      }
    };
    loadFavoriteMatches();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.matchItem}>
      <Image source={{ uri: item.league.image_path }} style={styles.teamLogo} />
      <View style={styles.matchDetails}>
        <Text style={styles.teamName}>{item.participants[0].name} vs {item.participants[1].name}</Text>
        <Text style={styles.matchDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Favorite Matches</Text>
      <FlatList
        data={favoriteMatches}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  matchDetails: {
    flex: 1,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  matchDate: {
    fontSize: 14,
    color: '#555',
  },
});

export default FavoriteMatchesScreen;
