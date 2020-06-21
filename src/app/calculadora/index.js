/* eslint-disable prettier/prettier */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Calculadora } from './calculadora';
import { Resultado } from './resultado';

const CalculadoraScreen = () => <Calculadora/>;
const ResultadoScreen = () => <Resultado/>;

const Stack = createStackNavigator();
export default function Home() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={CalculadoraScreen} />
      <Stack.Screen name="Resultado" component={ResultadoScreen} />
    </Stack.Navigator>
  );
}