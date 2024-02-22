import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/teamActions';

const EquipeScreen = ({ teams, fetchTeams }) => {
  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Liste des Équipes :</Text>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Joueurs :</Text>
            <FlatList
              data={item.players}
              keyExtractor={(player) => player.id.toString()}
              renderItem={({ player }) => (
                <Text>{player.name}</Text>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teams.teams,
});

export default connect(mapStateToProps, { fetchTeams })(EquipeScreen);