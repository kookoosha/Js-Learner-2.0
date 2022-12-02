import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  StatusBar, Text, View,
} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Switch } from 'react-native-gesture-handler';
import themeContext from '../../ThemeContext/themeContext';
import styles from './mainScreen';

export default function MainScreen() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const navigation = useNavigation();

  return (

    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <StatusBar />
      <Text style={styles.mainText}>Just Do It!</Text>
      <View style={styles.mainPageBtns}>
        <Button style={{ marginBottom: 10 }} title="Регистрация" onPress={() => navigation.navigate('')} />
        <Button style={{ marginBottom: 10 }} title="Авторизация" onPress={() => navigation.navigate('')} />
        <Button style={{ marginBottom: 10 }} title="Старт" onPress={() => navigation.navigate('Lev')} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Switch
          value={mode}
          onValueChange={(value) => {
            setMode(value);
            EventRegister.emit('changeTheme', value);
          }}
        />
      </View>
      <Text style={[styles.btnText, { color: theme.color }]}>Темная тема</Text>
    </View>

  );
}
