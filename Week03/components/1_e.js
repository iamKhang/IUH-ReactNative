import {
    Text,
    View,
    StyleSheet,
    Pressable,
  } from 'react-native';
  import { RadioButton, TextInput } from 'react-native-paper';
  import { useState } from 'react';
  import * as React from 'react';
  
  export default function Screen_1a() {
    const [value, setValue] = useState('male');
  
    return (
      <View style={{ flex: 1, backgroundColor: '#d8efdf' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
            }}>
            REGISTER
          </Text>
        </View>
        <View
          style={{
            flex: 6,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput placeholder="Name" style={styles.textInput}></TextInput>
          <TextInput placeholder="Phone" style={styles.textInput}></TextInput>
          <TextInput placeholder="Email" style={styles.textInput}></TextInput>
          <TextInput
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            style={styles.textInput}
          />
          <TextInput placeholder="Birthday" style={styles.textInput}></TextInput>
  
          <View style={{
            flex: 1,
            alignItems: 'flex-start',
            width: '90%'
          }}>
            <RadioButton.Group
              onValueChange={(value) => setValue(value)}
              value={value}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '80%',
                }}>
                <View style={styles.radioItem}>
                  <RadioButton value="male" />
                  <Text>Male</Text>
                </View>
                <View style={styles.radioItem}>
                  <RadioButton value="female" />
                  <Text>Female</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
  
          <Pressable
            style={{
              flex: 1,
              backgroundColor: '#c34e3b',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
              width: '90%',
            }}>
            <Text
              style={{
                color: '#d8efdf',
              }}>
              REGISTER
            </Text>
          </Pressable>
        </View>
  
        <View
          style={{ flex: 1, backgroundColor: '#d8efdf', alignItems: 'center' }}>
          <Text>When you agree to terms and conditions</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    radioItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginLeft: 10
    },
  
    textInput: {
      flex: 1,
      marginTop: 10,
      width: '90%',
      backgroundColor: '#cae1d1',
    },
  });
  