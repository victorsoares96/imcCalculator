/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
  Input
} from '@ui-kitten/components';
import { ThemeContext } from '../../../theme-context';

import { createStackNavigator } from '@react-navigation/stack';
import { Calculadora } from './calculadora';
import { Resultado } from './resultado';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */

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