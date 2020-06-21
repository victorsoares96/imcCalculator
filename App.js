import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components';
/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import { ThemeContext } from './theme-context';
import Home from './src/app/calculadora';
import Sobre from './src/app/sobre';
/*
  const Stack = createStackNavigator();
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
*/
const Tab = createBottomTabNavigator();
const HomeScreen = () => <Home/>;
const SobreScreen = () => <Sobre/>;

/*
  HeaderMode

  'float'
    Render a single header that stays at the 
    top and animates as screens are changed. 
    This is a common pattern on iOS.

  'screen'
    Each screen has a header attached to it
    and the header fades in and out together
    with the screen. This is a common pattern on Android.

  'none'
    No header will be rendered.
*/
const header = 'none';

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title={state.routeNames[0]}/>
    <BottomNavigationTab title={state.routeNames[1]}/>
  </BottomNavigation>
);

export default () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
  <>
  <IconRegistry icons={EvaIconsPack}/>
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <ApplicationProvider {...eva} theme={eva[theme]}>
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name="CALCULADORA" component={HomeScreen} />
        <Tab.Screen name="SOBRE" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
  </ThemeContext.Provider>
  </>
  );
}
