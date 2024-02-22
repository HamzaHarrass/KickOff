import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

const PlayerScreen = ({ route }) => {
  const { team } = route.params;
  const [playersData, setPlayersData] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    const fetchPlayersData = async () => {
      const promises = team.players.map(async (player) => {
        try {
          const response = await axios.get(`https://api.sportmonks.com/v3/football/players/${player.player_id}`, {headers:{Authorization:'TL6Gh8pelPNE0dfFrjTAEc6UD3eAdgnq1PuqigxjirGAk7XCyEJkvszFiMPx'}});
          return response.data.data;
        } catch (error) {
          console.error('Error fetching player data:', error);
          return null;
        }
      });

      const playersData = await Promise.all(promises);
      setPlayersData(playersData.filter(player => player !== null));
    };

    fetchPlayersData();
  }, [team]);

  const renderItem = ({ item }) => (
    <View style={styles.playerContainer}>
      <Image source={{ uri: item.image_path }} style={styles.playerAvatar} />
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item.name}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item, index) => {
    return item.player_id ? item.player_id.toString() : index.toString();
  };

  const onLayout = () => {
    const { width } = Dimensions.get('window');
    const maxPlayersPerRow = Math.floor(width / 150); 
    setNumColumns(maxPlayersPerRow);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={styles.heading}>Players of {team.name}</Text>
      <FlatList
        data={playersData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatListContent}
        numColumns={numColumns}
        key={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  flatListContent: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  playerContainer: {
    width: 150, 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
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
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerPosition: {
    fontSize: 14,
    color: '#666',
  },
  playerNumber: {
    fontSize: 14,
    color: '#666',
  },
});

export default PlayerScreen;
