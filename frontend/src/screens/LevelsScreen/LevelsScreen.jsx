import React, { useContext } from 'react';
import { View } from 'react-native';
import Levels from '../../components/Levels/Levels';
import themeContext from '../../ThemeContext/themeContext';
import styles from '../MainScreen/mainScreen';

function LevelsScreen() {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <Levels />
    </View>
  );
}

export default LevelsScreen;
