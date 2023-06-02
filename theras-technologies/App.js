import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './Router';
import Header from './Components/header/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <Router />
    </SafeAreaProvider>
  );
}
