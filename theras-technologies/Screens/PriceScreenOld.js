// import React, { useState } from 'react';

// const PriceScreen = () => {
//   return <PriceScreen>price el</PriceScreen>;
// };

// export default PriceScreen;

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import { Data } from './Data';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

// const PriceScreen = (props) => {
//   let route = props.route;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         <Text style={{ fontWeight: 'bold' }}>Screen Route: </Text>
//         {route.name}
//       </Text>
//       <Text style={styles.text}>
//         <Text style={{ fontWeight: 'bold' }}>Params: </Text>
//         {route.params ? JSON.stringify(route.params, 5) : 'No Params Passed'}
//       </Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
  },
});
const PriceScreen = (props) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Screen Route: </Text>
        {route.name}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Params: </Text>
        {route.params ? JSON.stringify(route.params, 5) : 'No Params Passed'}
      </Text> */}
      <div id="myChart"></div>
    </View>
  );
};

export default PriceScreen;
