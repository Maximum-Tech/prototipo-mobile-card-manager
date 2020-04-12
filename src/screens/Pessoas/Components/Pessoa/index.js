import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {
  Nome,
  DadosPessoais,
  Email,
  Telefone,
  Divida,
  TextoDivida,
  ValorDivida,
} from './styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});

const Item = ({pessoa}) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Nome>{pessoa.nome}</Nome>
        <DadosPessoais>
          <Email>{pessoa.email}</Email>
          <Telefone>{pessoa.telefone}</Telefone>
        </DadosPessoais>
        <Divider />
        <Divida>
          <TextoDivida>Divida:</TextoDivida>
          <ValorDivida>R$ {pessoa.divida.toFixed(2)}</ValorDivida>
        </Divida>
      </Card.Content>
    </Card>
  );
};

export default Item;
