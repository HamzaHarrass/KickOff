// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import MatchesScreen from './screens/MatchesScreen';
import MatchDetailsScreen from './screens/MatchDetailsScreen'
import EquipesScreen from './screens/EquipesScreen';
import PlayerScreen from './screens/PlayerScreen'
import PlayerDetails from './screens/PlayerDetailsScreen'
import FavoriteMatchesScreen from './screens/FavoriteMatchesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}}  component={HomeScreen} />
      <Stack.Screen name="Matches" options={{headerShown:false}}  component={MatchesScreen} />
      <Stack.Screen name="Favorites" options={{headerShown:false}}  component={FavoriteMatchesScreen} />
      <Stack.Screen name="MatchDetails" options={{headerShown:true, title:"", headerShadowVisible:false,headerStyle:{backgroundColor:"#F2F2F2"}}}  component={MatchDetailsScreen}/>
      <Stack.Screen name="Equipes" options={{headerShown:false }}  component={EquipesScreen} />
      <Stack.Screen name="Player" options={{headerShown:false }}  component={PlayerScreen} />
      <Stack.Screen name="PlayerDetails" options={{headerShown:false }}  component={PlayerDetails} />
    </Stack.Navigator>
    </NavigationContainer></Provider>
  );
};

export default App;
