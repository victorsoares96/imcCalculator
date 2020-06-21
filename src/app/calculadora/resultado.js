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

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './styles';

import Morreu from '../../assets/animations/morreu.json';

export function Resultado() {
  const route = useRoute();
  const navigation = useNavigation();
  const { imc } = route.params;
  const voltarParaOInicio = () => (navigation.goBack());

  function Animacao() {
    return (
      <Lottie autoSize autoPlay loop style={{width: '100%'}} 
      resizeMode='contain' source={
        imc < 18.5 ? require('../../assets/animations/magro.json')
        :
        imc > 18.5 && imc < 24.9 ? require('../../assets/animations/saudavel.json')
        :
        imc > 25 && imc < 29.9 ? require('../../assets/animations/sobrepeso.json')
        :
        imc > 30 && imc < 39.9 ? require('../../assets/animations/obeso.json')
        :
        imc > 40 ? require('../../assets/animations/morreu.json')
        : require('../../assets/animations/error.json')
      }/>
    );
  }
  function Titulo() {
    return (
      <Text category='h2'>
        {
          imc < 18.5 ? <Text category='h2'>Você está muito magro!</Text>
          :
          imc > 18.5 && imc < 24.9 ? <Text category='h2'>Você está saudável!</Text>
          :
          imc > 25 && imc < 29.9 ? <Text category='h2'>Você está um pouco acima do peso!</Text>
          :
          imc > 30 && imc < 39.9 ? <Text category='h2'>Você está acima do peso!</Text>
          :
          imc > 40 ? <Text category='h2'>Você está com obesidade mórbida...</Text>
          : <Text category='h2'>Ocorreu um erro!</Text>
        }
      </Text>
    );
  }
  function Texto() {
    return (
      imc < 18.5 ?
        <Text style={styles.description} category='p1'>
          Seu Indíce de Massa Corpórea (IMC) é de {imc},
          o que mostra que você está com Magreza.
          Neste caso, é necessária a busca por um especialista,
          para verificar a existência de algum problema de saúde
          causador do índice abaixo do normal, ou analisar se sua
          saúde não está sendo afetada.
        </Text>
      :
      imc > 18.5 && imc < 24.9 ?
        <Text style={styles.description} category='p1'>
          Seu Indíce de Massa Corpórea (IMC) é de {imc},
          o que mostra que você está saudável!
          Seu peso é considerado normal pelos padrões da OMS.
          No entanto, mesmo nesta faixa de peso, deve-se ter
          atenção e cuidado com possíveis problemas metabólicos,
          principalmente se houver acúmulo de gordura na região
          interna do abdômen.
        </Text>
      :
      imc > 25 && imc < 29.9 ?
        <Text style={styles.description} category='p1'>
          Seu Indíce de Massa Corpórea (IMC) é de {imc},
          o que mostra que você está com o peso em pré-obesidade ou acima do peso.
          Neste caso, é imprescindível uma consulta com um especialista, pois pode estar
          relacionado à pressão alta, colesterol alto ou diabetes, podendo apontar até para o
          hipotireoidismo. É tempo de consultar um profissional, realizar exames e pensar em
          uma reeducação alimentar e exercícios físicos.
        </Text>
      :
      imc > 30 && imc < 39.9 ?
        <Text style={styles.description} category='p1'>
          Seu Indíce de Massa Corpórea (IMC) é de {imc},
          o que mostra que você está com Obesidade.
          Este peso aumenta riscos para várias doenças, como diabetes,
          hipertensão arterial, o infarto do miocárdio e diversos tipos
          de câncer. A obesidade já é considerada uma comorbidade e
          necessita de tratamento profissional. O indicado é consultar
          um especialista e receber acompanhamento adequado.
        </Text>
      :
      imc > 40 ?
        <Text style={styles.description} category='p1'>
          Seu Indíce de Massa Corpórea (IMC) é de {imc},
          o que mostra que você está com Obesidade Mórbida.
          O peso neste grau apresenta problemas extremamente graves e necessita
          de tratamento profissional com o máximo de recursos disponíveis,
          incluindo até cirurgia.
        </Text>
      :
        <>
        <Text style={styles.description} category='s1'>
          Favor retorne a tela principal e tente novamente!
        </Text>
        <Text style={styles.description} category='p1'>
          Verifique se você digitou a altura e o peso corretamente, lembrando que se você
          tiver por exemplo: 1,62 cm de altura você deve digitar 1.62, a mesma coisa vale
          para o peso!
        </Text>
        </>
    );
  }
  return (
    <Layout style={styles.container}>
      <Titulo/>
      <Animacao/>
      <Texto/>
      <Button style={styles.button} onPress={voltarParaOInicio}>
        VOLTAR PARA O INICIO
      </Button>
    </Layout>
  );
}
