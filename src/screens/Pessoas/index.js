import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {Lista} from './style';
import GradientContainer from '~/components/GradientContainer';

import Item from './Components/Pessoa';

const styles = StyleSheet.create({
  container: {
    padding: '20px',
  },
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    backgroundColor: '#3ae374',
  },
});

const Pessoas = ({navigation}) => {
  const [pessoas, setPessoas] = useState([
    {
      id: 1,
      nome: 'Anderson Soares Cardoso',
      telefone: '(69) 9 8471 3656',
      email: 'and@go.com',
      divida: 0.0,
    },
    {
      id: 2,
      nome: 'Leticia Rani Pimenta Almeida',
      telefone: '(69) 9 8471 3656',
      email: 'let@go.com',
      divida: 0.0,
    },
  ]);

  return (
    <GradientContainer style={styles.container}>
      <Lista
        data={pessoas}
        renderItem={({item}) => <Item pessoa={item} />}
        keyExtractor={(item) => String(item.id)}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('Cadastro', {setPessoas})}
      />
    </GradientContainer>
  );
};

export default Pessoas;
