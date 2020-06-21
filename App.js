import 'react-native-gesture-handler';
/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

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

const Tab = createBottomTabNavigator();
const HomeScreen = () => <Home/>;
const SobreScreen = () => <Sobre/>;

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
};
