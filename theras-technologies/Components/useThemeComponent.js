import * as React from 'react';
import { useTheme } from 'react-native-paper';

function useThemeComponent(props) {
  const { colors } = useTheme();
  return <Text style={{ color: colors.primary }}>Hello World!</Text>;
}
