import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ImageBackground, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setMatches, setSelectedLeague, toggleFavorite } from '../reducers/matchesReducer';
import { useNavigation } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MatchesScreen = () => {
  const dispatch = useDispatch();
  const allMatches = useSelector(state => state.matches.matches);
  const [matches, setFilteredMatches] = useState(allMatches);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeagueId, setSelectedLeagueId] = useState(null);
  const navigation = useNavigation(); 

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/leagues',{headers:{Authorization:'TL6Gh8pelPNE0dfFrjTAEc6UD3eAdgnq1PuqigxjirGAk7XCyEJkvszFiMPx'}});
        setLeagues(response.data.data);
      } catch (error) {
        console.error('Error fetching leagues:', error);
      }
    };
    fetchLeagues();

    const fetchAllMatches = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures?include=participants;league',{headers:{Authorization:'TL6Gh8pelPNE0dfFrjTAEc6UD3eAdgnq1PuqigxjirGAk7XCyEJkvszFiMPx'}});
        dispatch(setMatches(response.data.data));
        setFilteredMatches(response.data.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };
    fetchAllMatches();
  }, []);

  useEffect(() => {
    filterMatchesByLeague();
  }, [selectedLeagueId]);

  const filterMatchesByLeague = () => {
    if (selectedLeagueId) {
      const filtered = allMatches.filter(match => match.league.id === selectedLeagueId);
      setFilteredMatches(filtered);
    } else {
      setFilteredMatches(allMatches);
    }
  };

  const handleClickLeague = (leagueId) => {
    setSelectedLeagueId(leagueId);
  };

  const handleClickMatch = (match) => {
    dispatch(setSelectedLeague(match.league));
    navigation.navigate('MatchDetails', { matchId: match.id }); 
  };

  const handleFavorite = async (match) => {
    dispatch(toggleFavorite(match));
  try {
    const storedFavorites = await AsyncStorage.getItem('favoriteMatches');
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    if (match.isFavorite) {
      favorites.push(match);
    } else {
      favorites = favorites.filter(favorite => favorite.id !== match.id);
    }
    await AsyncStorage.setItem('favoriteMatches', JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorite match:', error);
  }
  };

  const handleNavigateToFavorites = () => {
    navigation.navigate('Favorites'); 
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleClickMatch(item)} style={styles.matchItem}>
      <TouchableOpacity onPress={() => handleFavorite(item)} style={styles.favoriteIcon}>
        <Image source={item.isFavorite ? require('../assets/pouces-vers-le-haut.png') : require('../assets/icons8-favorite-30.png')} style={styles.favoriteIconImage} />
      </TouchableOpacity>
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
      <ImageBackground source={require('../assets/Mask Group.png')} style={styles.headerImage} >
      <Text style={styles.headerText}>Matchs</Text>
      </ImageBackground>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.leaguesContainer}>
        {leagues.map((league) => (
          <TouchableOpacity
            key={league.id}
            onPress={() => handleClickLeague(league.id)}
            style={[
              styles.leagueButton,
              selectedLeagueId === league.id && styles.selectedLeagueButton,
            ]}
          >
            <Image source={{ uri: league.image_path }} style={styles.leagueImage} />
            <Text style={styles.leagueName}>{league.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity onPress={handleNavigateToFavorites} style={styles.favoriteButton}>
        <Text style={styles.favoriteButtonText}>Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 150,
    marginLeft:70,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:60,
    color:'#7F36C7',
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
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  favoriteIconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
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
  leaguesContainer: {
    marginBottom: 10,
  },
  leagueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
  },
  selectedLeagueButton: {
    backgroundColor: '#7F36C7',
    borderColor: 'white',
  },
  leagueImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  leagueName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButton: {
    backgroundColor: '#7F36C7',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  favoriteButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MatchesScreen;
