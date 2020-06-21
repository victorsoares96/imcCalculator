/* eslint-disable prettier/prettier */

/*
  Imports são importações de componentes para o projeto,
  é como se fosse plugins que adicionam funcionalidades
  a mais no projeto.
*/
import React from 'react';
import Lottie from 'lottie-react-native';
import {
  Button,
  Layout,
  Text,
} from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';

/*
  Esse styles é a folha de estilos da página calculadora,
  folha de estilos é como se fosse o CSS do HTML, são
  estilizações para os componentes, através das estilizações
  podemos mudar a cor de letras, cor do plano de fundo de
  um botão e etc...
*/
import { styles } from './styles';

/* Esta é a página Resultado que é uma página filha da Calculadora */
export function Resultado() {
  /* Estes 'const' é como se fossem variáveis */
  const route = useRoute();
  const navigation = useNavigation();
  const { imc } = route.params;

  /* Função responsável por fazer o usuário voltar a tela principal */
  const voltarParaOInicio = () => (navigation.goBack());

  /* 
    Função que gerencia qual animação deve aparecer com base no
    resultado do IMC
  */
  function Animacao() {
    return (
      <Lottie autoSize autoPlay loop style={{width: '80%'}} 
      resizeMode='contain' source={
        imc < 18.5 && imc > 0 ? require('../../assets/animations/magro.json')
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
  /* 
    Função que gerencia qual titulo deve aparecer com base no
    resultado do IMC
  */
  function Titulo() {
    return (
      <Text category='h2'>
        {
          imc < 18.5 && imc > 0 ? <Text category='h2'>Você está muito magro!</Text>
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

  /* 
    Função que gerencia qual texto deve aparecer com base no
    resultado do IMC
  */
  function Texto() {
    return (
      imc < 18.5 && imc > 0 ?
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
