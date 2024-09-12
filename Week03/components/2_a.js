import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import { useState } from 'react';
import { RadioButton, TextInput } from 'react-native-paper';

export default function Screen_1a() {
  const [nextBtnActive, setNextBtnActive] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          'linear-gradient(0deg, rgba(193,156,1,1) 0%, rgba(249,201,0,1) 11%',
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '90%',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 700,
            marginLeft: '5%',
          }}>
          LOGIN
        </Text>
      </View>

      <View
        style={{
          flex: 5,
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            label="Name"
            left={<TextInput.Icon icon="account" />}
            style={styles.input}
          />
          <TextInput
            style={styles.input}
            label="Password"
            secureTextEntry
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon="eye" />}
          />
        </View>

        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Pressable
            style={{
              backgroundColor: '#060000',
              width: '90%',
              height: 50,
              padding: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 20,
                color: '#fff',
              }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          flex: 4,
          alignItems: 'center',
        }}>

        <View
          style={{
            width: '90%',
            height: 50,
            marginTop: 50,
            marginBottom: 30,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500
            }}
          >CREATE ACCOUNT</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: '#ddbe3c',
  },
});
