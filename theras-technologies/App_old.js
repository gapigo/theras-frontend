// import { StatusBar } from 'expo-status-bar';
// import React from 'react';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { theme } from './Theme';
// import BottomNavigationExample from './Screens/Example/BottomNavigationExample';

// export default function App() {
//   return (
//     <PaperProvider theme={theme}>
//       {/* <TopBar />
//       <MainScreen /> */}
//       <BottomNavigationExample />
//     </PaperProvider>
//   );
// }

// import 'react-native-gesture-handler';

// const Stack = createStackNavigator();

import React, { useState } from 'react';
console.log('1');
import * as Linking from 'expo-linking';
console.log('1');
import PriceScreen from './Screens/PriceScreen';
import FinancasScreen from './Screens/FinancasScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
console.log('1333');

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function App() {
  const state = {
    routes: [
      {
        name: 'Price',
      },
      {
        name: 'Financas',
      },
    ],
  };

  const config = {
    screens: {
      Price: 'price',
      Financas: 'financas',
    },
  };
  const linking = {
    prefixes: [Linking.createURL('/'), 'https://app.example.com'],
    state,
    config,
  };

  const Home = (props) => {
    return <Text>Home</Text>;
  };
  const Profile = (props) => {
    return <Text>Profile</Text>;
  };
  const Settings = (props) => {
    return <Text>Settings</Text>;
  };

  return (
    // <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    //   Content
    //   <Stack.Navigator>
    //     <Stack.Screen name="Price" component={PriceScreen} />
    //     <Stack.Screen name="Financas" component={FinancasScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer linking={linking}>
      <p>{console.log('999')}</p>
      <Stack.Navigator initialRouteName="Price">
        <Stack.Screen name="Price" component={PriceScreen} />
        <Stack.Screen name="Financas" component={FinancasScreen} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen name="Price" component={PriceScreen} />
    //   <Stack.Screen name="Financas" component={FinancasScreen} />
    // </Stack.Navigator>
    // <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    //   loading
    // </NavigationContainer>
  );
}
