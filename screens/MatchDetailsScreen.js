// MatchDetails.js
import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const MatchDetails = () => {
  const navigation = useNavigation(); 
  const route = useRoute(); 
  const { matchId } = route.params; 
  const match = useSelector(state => state.matches.matches.find(m => m.id === matchId));

  if (!match) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Match not found</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>Back to Matches</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container,{flex:1}]}>
      <Text style={styles.title}>{match.name}</Text>
      <View style={[styles.container,{backgroundColor:"white", borderRadius:25}]}>
      <View>
        <Image style={{width:90,height:80}} source={{uri: match.league.image_path}}/>
      </View>
      
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", gap:16, paddingVertical:16}}>
        <View key={match.participants[0].id} style={styles.teamContainer}>
          <Image source={{ uri: match.participants[0].image_path }} style={styles.teamImage} />
          <Text style={styles.teamName}>{match.participants[0].name}</Text>
        </View>
        <View style={{alignItems:"center"}}>
            <Text style={styles.text}>{match.starting_at.split(' ')[1]}</Text>
            <Text style={styles.text}>{match.starting_at.split(' ')[0]}</Text>
        </View>
        <View key={match.participants[1].id} style={styles.teamContainer}>
          <Image source={{ uri: match.participants[1].image_path }} style={styles.teamImage} />
          <Text style={styles.teamName}>{match.participants[1].name}</Text>
        </View>
      </View>
      <Text style={styles.text}>{match.result_info}</Text>
      </View>
     
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Back to Matches</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  teamContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  teamName: {
    fontSize: 18,
    // fontWeight:600,
    marginRight: 10,
  },
  teamImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  errorText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'red',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MatchDetails;
