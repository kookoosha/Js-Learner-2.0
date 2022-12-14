import { Button } from '@react-native-material/core';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from '../../screens/MainScreen/mainScreen';
import { OneLevel } from './OneLevel';
import themeContext from '../../ThemeContext/themeContext';

function Levels() {
  const navigation = useNavigation();
  const levels = useSelector((store) => store.levels);
  const [lev, setLev] = React.useState();
  const theme = useContext(themeContext);

  React.useEffect(() => {
    axios.get('http://192.168.2.246:3001/levels')
      .then((res) => setLev(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (

    <View>
      <Text
        variant="h1"
        style={{
          marginBottom: 16, fontSize: 16, fontWeight: '500', color: theme.color,
        }}
      >
        Выбери уровень сложности:
      </Text>
      {lev?.map((el) => (
        <Button
          key={el.id}
          style={{ marginBottom: 30, width: 200 }}
          title={el.name}
          onPress={() => {
            navigation.navigate('Que', {
              itemId: `${el.id}`,
              otherParam: 'anything you want here',
            });
          }}
        />
      ))}
    </View>

  );
}

export default Levels;
