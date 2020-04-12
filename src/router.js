import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Pessoas from '~/screens/Pessoas';
import Cadastro from '~/screens/Pessoas/Components/Cadastro';
import Cartao from '~/screens/Cartao';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const PessoasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pessoas"
        component={Pessoas}
        options={{
          title: 'Person',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

export default function Router() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Pessoas" component={PessoasStack} />
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Cartões" component={Cartao} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
