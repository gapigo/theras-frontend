// function CardExpandido() {
//   return <></>;
// }

// function FinancasScreen() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="CardExpandido" component={CardExpandido} />
//     </Tab.Navigator>
//   );
// }
// https://reactnavigation.org/docs/configuring-links
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const FinancasScreen = ({ route }) => {
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

export default FinancasScreen;
