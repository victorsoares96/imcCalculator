/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Text,
} from '@ui-kitten/components';
import { ThemeContext } from '../../../theme-context';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (props) => (
  <Icon {...props} name='heart'/>
);

export default function Home() {
  const themeContext = React.useContext(ThemeContext);
  return (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h1'>
      Hello World
    </Text>
    <Text style={styles.text} category='s1'>
      Start with editing App.js to configure your App
    </Text>
    <Text style={styles.text} appearance='hint'>
      For example, try changing theme to Dark by using eva.dark
    </Text>
    <Button style={styles.likeButton} accessoryLeft={HeartIcon}
    onPress={themeContext.toggleTheme}>
      MUDAR TEMA
    </Button>
  </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});