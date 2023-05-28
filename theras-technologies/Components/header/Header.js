import { Header as HeaderComponent } from '@rneui/themed';
import { ViewComponent } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ content }) => {
  return (
    <View>
      <HeaderComponent
        // ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['red', 'pink'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
      {content}
    </View>
  );
};

export default Header;
