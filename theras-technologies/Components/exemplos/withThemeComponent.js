import * as React from 'react';
import { withTheme } from 'react-native-paper';

function withThemeComponent(props) {
  const { colors } = props.theme;
  return <Text style={{ color: colors.primary }}>Hello World!</Text>;
}

export default withTheme(withThemeComponent);
