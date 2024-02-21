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
          title="Afficher les matchs"
          style={styles.button}
          onPress={() => navigation.navigate('Matches')}>
           <Text style={styles.buttonText}>Afficher les matchs</Text>
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
    backgroundColor: '#009Cff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
