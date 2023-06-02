import { Header as HeaderComponent } from '@rneui/themed';
import { ViewComponent } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#410541',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  header_text: {
    fontFamily: 'Piazzolla',
    color: '#fff',
  },
  image_logo: {
    width: 22,
    height: 22,
  },
});

const Logo = () => {
  return (
    <View style={styles.header}>
      <link
        href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@500&family=Poppins:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <Image
        style={styles.image_logo}
        source={require('../../assets/images/logo_256_256.png')}
      />
      <Text style={styles.header_text}>THERAS</Text>
    </View>
  );
};

const DummyLinearGradient = (content) => {
  return <View style={styles.header}>{content}</View>;
};

const Header = ({ content }) => {
  return (
    <View>
      <HeaderComponent centerComponent={Logo} backgroundColor={'#410541'} />
      {content}
    </View>
  );
};

export default Header;
