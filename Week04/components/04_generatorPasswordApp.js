import { View, StyleSheet, Text, Pressable, TextInput } from 'react-native';
import {  Checkbox } from 'react-native-paper';
import { useState } from 'react';

export default function GeneratorPassword() {
  const [lowerCaseLetters, setLowerCaseLetters] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [haveNumber, setHaveNumber] = useState(false);
  const [haveSpecialSymbol, setHaveSpecialSymbol] = useState(false);
  const [password, setPassword] = useState('Hãy tạo password của bạn!')
  const [passwordLength, setPasswordLength] = useState('');

  const generatePassword = () => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialSymbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterSet = '';
    if (lowerCaseLetters) characterSet += lowerCase;
    if (upperCase) characterSet += upperCaseLetters;
    if (haveNumber) characterSet += numbers;
    if (haveSpecialSymbol) characterSet += specialSymbols;
    if (characterSet === '') {
      Alert.alert('Lỗi', 'Hãy chọn ít nhất một loại ký tự để tạo mật khẩu!');
      return;
    }
    const passwordLen = parseInt(passwordLength, 10);
    if (isNaN(passwordLen) || passwordLen < 1) {
      Alert.alert('Lỗi', 'Hãy nhập một độ dài hợp lệ!');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLen; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <View style={styles.component}>
      <View
        style={{
          flex: 2,
          width: '90%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 8
        }}>
        <Text style={styles.title}>Genetator {'\n'} Password</Text>

        <TextInput style={styles.input} editable={false} value={password} underlineColorAndroid="transparent" />
      </View>
      <View style={{ flex: 4, width: '90%' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.lable}>Password length</Text>
          <TextInput style={styles.inputPasswordLengh}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={setPasswordLength}
          placeholder="Enter length"
          placeholderTextColor="gray"
          
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.lable}>Include lower case letters</Text>
          <Checkbox
            style={styles.checkbox}
            status={lowerCaseLetters ? 'checked' : 'unchecked'}
            onPress={() => setLowerCaseLetters(!lowerCaseLetters)}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.lable}>Include upcase letters</Text>
          <Checkbox
            style={styles.checkbox}
            status={upperCase ? 'checked' : 'unchecked'}
            onPress={() => setUpperCase(!upperCase)}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.lable}>Include number</Text>
          <Checkbox
            style={styles.checkbox}
            status={haveNumber ? 'checked' : 'unchecked'}
            onPress={() => setHaveNumber(!haveNumber)}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.lable}>Include special symbol</Text>
          <Checkbox
            style={styles.checkbox}
            status={haveSpecialSymbol ? 'checked' : 'unchecked'}
            onPress={() => setHaveSpecialSymbol(!haveSpecialSymbol)}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable style={styles.btn} onPress={generatePassword}>
          <Text style={styles.lableInBtn}>GENERATE PASSWORD </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#23235b',
    alignItems: 'center',
  },

  title: {
    marginTop: 8,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#fff',
  },

  input: {
    width: '100%',
    height: '30%',
    backgroundColor: '#151537',
    fontSize: 18, 
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10
  },

  lable: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  inputPasswordLengh: {
    width: '40%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
  },

  checkbox: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
  },

  btn: {
    backgroundColor: '#3b3b98',
    height: '50%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lableInBtn: {
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 5,
    color: '#fff'
  },
});
