/* eslint-disable prettier/prettier */

/*
  Imports são importações de componentes para o projeto,
  é como se fosse plugins que adicionam funcionalidades
  a mais no projeto.
*/
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
import { useNavigation } from '@react-navigation/native';

/*
  Esse styles é a folha de estilos da página calculadora,
  folha de estilos é como se fosse o CSS do HTML, são
  estilizações para os componentes, através das estilizações
  podemos mudar a cor de letras, cor do plano de fundo de
  um botão e etc...
*/
import { styles } from './styles';

/*
  LightIcon & DarkIcon são os icones do botão que muda de 'light'
  para 'dark' o tema da aplicação...
*/
const LightIcon = (props) => (
  <Icon {...props} name='sun-outline'/>
);

const DarkIcon = (props) => (
  <Icon {...props} name='moon-outline'/>
);

/* Esta é a página CALCULADORA */
export function Calculadora() {

  /* Estes 'const' é como se fossem variáveis */
  const themeContext = useContext(ThemeContext);
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const navigation = useNavigation();
  /* ---------------------------------------- */

  /*
    Esta irParaOResultado é a função que leva o usuário
    para a tela de resultado...
  */
  const irParaOResultado = (imc) => (
    navigation.navigate('Resultado', { imc: imc})
  );

  /**
   * Esta é função responsável por calcular o IMC com
   * base no que o usuário digitou como altura e peso...
   */
  const calcularIMC = () => {
    const imc = peso/(altura*altura);
    const imc_Formatado = imc.toFixed(2);
    irParaOResultado(imc_Formatado);
  };

  /**
   * themeStatus fornece a informação para o Botão de mudança
   * de tema se o icone que deve aparecer é o 'sol' ou a 'lua'
   */
  const themeStatus = (themeContext.theme === 'light' ? DarkIcon : LightIcon);

  /**
   * Uma breve explicação sobre essa parte de Layout, ScrollView,
   * Button, Text, Lottie e Input
   * 
   * Button é uma botão normal como o nome informa
   * 
   * View é como se fosse uma <div> no html como também o Layout e ScrollView
   * a diferença é que a ScrollView permite que você dê 'scroll' nos componentes
   * que estão dentro dela. ('scroll' é tipo você descer a página)
   * 
   * Text é um componente que mostra um texto qualquer
   * 
   * Input é um componente onde você pode inserir um valor, seja texto ou numero
   * 
   * Lottie é um componente que mostra animações, e essas animações estão salvas
   * na pasta 'assets/animations'
   * 
   * Todos esses nomes (appearance, style, category e etc, são propriedades dos componentes)
   * 
   * onPress é a ação que deve ser executado quando o usuário clica no componente.
   */
  return (
    <Layout style={{flex: 1}}>
      <ScrollView>
        <Button appearance='ghost' style={styles.button} accessoryLeft={themeStatus} onPress={themeContext.toggleTheme}>
          <Text appearance='hint' category='label'>Mudar o tema</Text>
        </Button>
        <View style={styles.container}>
          <Text style={styles.text} category='h1'>
            Calculadora de IMC
          </Text>
          <Text style={styles.text} category='s1'>
            Teste aqui seu indice de massa corpórea!
          </Text>
          <Lottie autoPlay style={{width: '60%'}} resizeMode='contain'
          source={require('../../assets/animations/balance2.json')}/>
        </View>
        <View style={styles.formContainer}>
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
        </View>
      </ScrollView>
    </Layout>
  );
}