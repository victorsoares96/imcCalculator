/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import {
  Button,
  Layout,
  Text,
} from '@ui-kitten/components';

import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import { styles } from './styles';

export default function Sobre() {
  const navigation = useNavigation();
  const IrParaACalculadora = () => (navigation.navigate('CALCULADORA'));
  return (
  <Layout style={styles.container}>
    <View style={styles.header}>
      <Text category='h1'>
        Sobre
      </Text>
      <Text category='h5'>
        Calculadora de IMC
      </Text>
      <View style={styles.animation}>
        <Lottie autoSize autoPlay style={{width: 250, height: 250}} 
        resizeMode='contain' source={require('../../assets/animations/balance2.json')}/>
      </View>
    </View>
    <View style={styles.content}>
      <Text category='p1'>
        Calculadora de IMC é uma aplicação hibrida
        desenvolvida em React Native para funcionar
        tanto em Android como em iOS, que tem como
        objetivo calcular o indíce de massa corpórea
        do usuário e retornar o resultado desse calculo
        ao mesmo.
      </Text>
    </View>
    <Button style={styles.button} onPress={IrParaACalculadora}>
      VOLTAR PARA O INICIO
    </Button>
  </Layout>
  );
}