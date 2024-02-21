import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setMatches, setSelectedLeague } from '../reducers/matchesReducer';
import { useNavigation } from '@react-navigation/native'; 
import axios from 'axios';

const MatchesScreen = () => {
  const dispatch = useDispatch();
  const matches = useSelector(state => state.matches.matches);
  const navigation = useNavigation(); 

  const handleClick = (match) => {
    dispatch(setSelectedLeague(match.league));
    navigation.navigate('MatchDetails', { matchId: match.id }); 
  };
  
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures?include=participants;league',{headers:{Authorization:'TL6Gh8pelPNE0dfFrjTAEc6UD3eAdgnq1PuqigxjirGAk7XCyEJkvszFiMPx'}});
        dispatch(setMatches(response.data.data));
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };
    fetchMatches();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleClick(item)} style={styles.matchItem}>
      <Image source={{ uri: item.league.image_path }} style={styles.teamLogo} />
      <View style={styles.matchDetails}>
        <View style={styles.teamsContainer}>
          <View style={{flexDirection:"row", width:100, gap:4, justifyContent:"flex-end", alignItems:"center"}}>
            <Text numberOfLines={1} style={styles.teamName}>{item.participants[0].name}</Text>
            <Image source={{ uri: item.participants[0].image_path }} style={styles.teamLogo} />
          </View>
          <Text style={styles.vsText}>VS</Text>
          <View style={{flexDirection:"row", width:100, gap:4, justifyContent:"flex-start",backgroundColor:"white", alignItems:"center"}}>
          <Image source={{ uri: item.participants[1].image_path }} style={styles.teamLogo} /> 
          <Text numberOfLines={1} style={styles.teamName}>{item.participants[1].name}</Text>
          </View>
          </View>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Matchs</Text>
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {/* Vous pouvez ajouter d'autres éléments ici, par exemple un bouton pour filtrer par ligue */}
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
  matchItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
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
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  matchDetails: {
    flex: 1,
  },
  matchName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  matchInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  teamLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap:12
  },
  teamName: {
    fontSize: 14,
    marginLeft: 5,
  },
  vsText: {
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default MatchesScreen;
