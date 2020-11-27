import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth'); // akan kembali ke halaman awal
    }, 2000);
  });

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
