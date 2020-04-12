import React, {useState} from 'react';
import GradientContainer from '~/components/GradientContainer';

import {
  Formulario,
  Input,
  Submit,
  Cancelar,
  Botoes,
  TextoBotao,
} from './styles';

export default function Cadastro({navigation, route}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <GradientContainer>
      <Formulario>
        <Input
          onChangeText={(text) => setNome(text)}
          value={nome}
          placeholder="Nome Completo"
        />
        <Input
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="E-Mail"
        />
        <Input
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
          placeholder="Telefone"
        />
        <Botoes>
          <Submit
            onPress={() =>
              route.params.setPessoas((prev) => {
                setNome('');
                setTelefone('');
                setEmail('');
                navigation.navigate('Pessoas');
                return [
                  ...prev,
                  {id: prev.length + 1, nome, email, telefone, divida: 0},
                ];
              })
            }>
            <TextoBotao>SALVAR</TextoBotao>
          </Submit>
          <Cancelar onPress={() => navigation.navigate('Pessoas')}>
            <TextoBotao>CANCELAR</TextoBotao>
          </Cancelar>
        </Botoes>
      </Formulario>
    </GradientContainer>
  );
}
