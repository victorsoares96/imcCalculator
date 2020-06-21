/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { ScrollView, View } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const LightIcon = (props) => (
  <Icon {...props} name='sun-outline'/>
);

const DarkIcon = (props) => (
  <Icon {...props} name='moon-outline'/>
);

export function Calculadora() {
  const themeContext = useContext(ThemeContext);
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const navigation = useNavigation();

  const irParaOResultado = (imc) => (
    navigation.navigate('Resultado', { imc: imc})
  );
  const calcularIMC = () => {
    const imc = peso/(altura*altura);
    const imc_Formatado = imc.toFixed(2);
    irParaOResultado(imc_Formatado);
  };
  const themeStatus = (themeContext.theme === 'light' ? DarkIcon : LightIcon);
  return (
  <Layout style={styles.container}>
    <SafeAreaView>
      <Button appearance='ghost' style={styles.button} accessoryLeft={themeStatus} onPress={themeContext.toggleTheme}>
        <Text appearance='hint' category='label'>Mudar o tema</Text>
      </Button>
      <View style={styles.header}>
      <Text style={styles.text} category='h1'>
        Calculadora de IMC
      </Text>
      <Text style={styles.text} category='s1'>
        Teste aqui seu indice de massa corpórea!
      </Text>
      <Lottie autoPlay style={{width: '60%'}} resizeMode='contain'
       source={require('../../assets/animations/balance2.json')}/>
      </View>
      <ScrollView style={styles.formContainer}>
        <Text style={{marginLeft: 10}} category='s1'>
          Insira sua altura:
        </Text>
        <Input
          style={styles.input}
          keyboardType = 'numeric'
          placeholder='Exemplo: 1.72'
          value={altura}
          onChangeText={altura => setAltura(altura)}
        />
        <Text style={{marginLeft: 10}} category='s1'>
          Insira seu peso:
        </Text>
        <Input
          style={styles.input}
          keyboardType = 'numeric'
          placeholder='Exemplo: 69.3'
          value={peso}
          onChangeText={peso => setPeso(peso)}
        />
        <Button style={styles.button} onPress={calcularIMC}>
          CALCULAR
        </Button>
      </ScrollView>
    </SafeAreaView>
  </Layout>
  );
}