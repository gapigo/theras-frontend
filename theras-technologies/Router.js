import PriceScreen from './Screens/PriceScreen';
import FinancasScreen from './Screens/FinancasScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Screen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Screen Route: </Text>
        {route.name}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Params: </Text>
        {route.params ? JSON.stringify(route.params, 5) : 'No Params Passed'}
      </Text>
    </View>
  );
};

const NotFound = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Found</Text>
    </View>
  );
};

const linking = {
  config: {
    screens: {
      Financas: '',
      Price: 'price/:ticker',
      NotFound: '*',
    },
  },
};

export default function Router() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Financas" component={FinancasScreen} />
        <Stack.Screen name="Price" component={PriceScreen} />
        <Stack.Screen name="NotFound" component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
