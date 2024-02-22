import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamsRequest, fetchTeamsSuccess, fetchTeamsFailure } from '../reducers/equipeReducer';

const EquipeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.equipe.teams);
  const loading = useSelector(state => state.equipe.loading);

  useEffect(() => {
    const fetchTeams = async () => {
      dispatch(fetchTeamsRequest());
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/teams?include=players', {headers:{Authorization:'TL6Gh8pelPNE0dfFrjTAEc6UD3eAdgnq1PuqigxjirGAk7XCyEJkvszFiMPx'}});
        dispatch(fetchTeamsSuccess(response.data.data));
      } catch (error) {
        console.error('Error fetching teams:', error);
        dispatch(fetchTeamsFailure(error));
      }
    };

    fetchTeams();
  }, [dispatch]);

  const handleTeamPress = (team) => {
    navigation.navigate('Player', { team });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTeamPress(item)} style={{width:180, height:100}}>
      <View style={{backgroundColor:"white", marginHorizontal:4, flexDirection:"row", alignItems:"center",padding:8, borderRadius:12}}>
        <Image source={{ uri: item.image_path }} style={styles.teamLogo} />
        <Text numberOfLines={1} style={[styles.teamName, {width:80}]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Équipes</Text>
      <FlatList
        data={teams}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        numColumns={2} 
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
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  teamContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // padding: 10,
    // borderRadius: 10,
    // marginBottom: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    // flex: 1,
    // margin: 5,
    // maxWidth: '48%', 
  },
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EquipeScreen;
