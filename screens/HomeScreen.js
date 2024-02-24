import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Group 717.png')}
        style={styles.backgroundImage}
      >
        <Text style={styles.heading}>Bienvenue sur l'application de Football</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Matches')}>
           <Text style={styles.buttonText}>Afficher les matchs</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Equipes')}>
           <Text style={styles.buttonText}>Afficher les équipes</Text>
         </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 350,
    color: 'white',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#7F36C7',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
