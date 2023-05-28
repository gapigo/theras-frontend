// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

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

import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './Theme';
import BottomNavigationExample from './Screens/Example/BottomNavigationExample';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      {/* <TopBar />
      <MainScreen /> */}
      <BottomNavigationExample />
    </PaperProvider>
  );
}
