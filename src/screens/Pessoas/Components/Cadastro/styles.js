import styled from 'styled-components/native';

export const Formulario = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 15px;
`;

export const Botoes = styled.View`
  flex-direction: row;
`;

export const Submit = styled.TouchableOpacity`
  background-color: #2ed573;
  flex: 1;
  margin-right: 5px;
  padding: 10px 0;
  border-radius: 5px;
`;

export const Cancelar = styled.TouchableOpacity`
  background-color: #ff4757;
  flex: 1;
  margin-left: 5px;
  padding: 10px 0;
  border-radius: 5px;
`;

export const TextoBotao = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
