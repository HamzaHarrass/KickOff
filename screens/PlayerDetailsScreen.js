import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { calculateAge } from '../utils/functions';

const PlayerDetailsScreen = ({ route }) => {
  const { player } = route.params;

  return (
    <SafeAreaView>
        <View>
            <Image source={require('../assets/playerHeader.png')}/>
            <View style={{ position: "absolute", top:38, left:24,}}>
                <Image source={{ uri: player.image_path }} style={{width:80, height:80, borderRadius:20 , backgroundColor:"white"}} />
                <Text style={{color:"white", fontSize:24, width:200, fontWeight:700, marginTop:16}}>{player.name}</Text>
            </View>
        </View>
        <ScrollView>
            <View style={{flexDirection:"row",padding: 32, justifyContent:"space-between"}}> 
                <View style={{alignItems:"center", width: 80, padding:12, backgroundColor:"#EDEDED", borderRadius:24}}>
                    <Image style={{width:56, height:35, marginVertical:14, borderRadius:10}} source={{uri : player.country.image_path}}/>
                    <Text numberOfLines={1} style={{fontWeight:500,fontSize:16, paddingVertical:4, borderTop: 2, width:56}}>{player.country.name}</Text>
                </View>
                <View style={{alignItems:"center", width: 80, padding:12, backgroundColor:"#EDEDED", borderRadius:24}}>
                    <Text style={{fontWeight:800,fontSize:32, lineHeight:60}}>{calculateAge(player.date_of_birth)}</Text>
                    <Text style={{fontWeight:500,fontSize:16, paddingVertical:4, borderTop: 2}}>Age</Text>
                </View>
                <View style={{alignItems:"center", width: 80, padding:12, backgroundColor:"#EDEDED", borderRadius:24}}>
                    <Text style={{fontWeight:800,fontSize:32, lineHeight:60,}}>{`${player.position.name.substring(0,2)}`}</Text>
                    <Text style={{fontWeight:500,fontSize:14, paddingVertical:4, borderTop: 2}}>position</Text>
                </View>
            </View>

            {/* Map Section */}
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: parseFloat(player.country.latitude),
                  longitude: parseFloat(player.country.longitude),
                  latitudeDelta: 10,
                  longitudeDelta: 10,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(player.country.latitude),
                    longitude: parseFloat(player.country.longitude),
                  }}
                  title={player.country.name}
                />
              </MapView>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
  },
  playerAvatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  playerInfo: {
    alignItems: 'center',
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playerPosition: {
    fontSize: 18,
    marginBottom: 5,
  },
  playerCountry: {
    fontSize: 18,
    marginBottom: 5,
  },
  playerBirth: {
    fontSize: 18,
  },
  mapContainer: {
    height: 300,
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 20,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    borderRadius: 20,
  },
});

export default PlayerDetailsScreen;
