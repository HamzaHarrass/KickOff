// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import MatchesScreen from './screens/MatchesScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}}  component={HomeScreen} />
      <Stack.Screen name="Matches" options={{headerShown:false}}  component={MatchesScreen} />
    </Stack.Navigator>
    </NavigationContainer></Provider>
  );
};

export default App;
