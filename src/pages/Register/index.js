import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../utils';
import {Input} from '../../components';
import {IconBack, RegisterImage} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} />
      <RegisterImage width={200} height={139} />
      <Text style={styles.text.desc}>
        Mohon mengisi beberapa data untuk proses daftar anda
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="nama lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="email" />
      <View style={styles.space(33)} />
      <Input placeholder="password" />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  illustration: {width: 106, height: 115, backgroundColor: 'black'},
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};

export default Register;
