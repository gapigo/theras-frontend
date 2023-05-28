import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
      Home: '',
      Feed: 'feed/:sort?/:type',
      Menu: {
        path: 'menu',
        screens: {
          TabA: 'a',
          TabB: 'b',
        },
      },
    },
  },
};
// const linking = {
//   config: {
//     Home: '',
//     Feed: 'feed/:sort?/:type',
//     Menu: {
//       path: 'menu',
//       screens: {
//         TabA: 'a',
//         TabB: 'b',
//       },
//     },
//     NotFound: '*',
//   },
// };

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabA" component={Screen} />
      <Tab.Screen name="TabB" component={Screen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Screen} />
        <Stack.Screen name="Feed" component={Screen} />
        <Stack.Screen name="Menu" component={Tabs} />
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
