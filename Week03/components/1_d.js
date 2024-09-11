import {
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    Pressable,
    TextInput,
  } from 'react-native';
  import { useState } from 'react';
  
  export default function Screen_1a() {
    const [nextBtnActive, setNextBtnActive] = useState(false);
  
    return (
      <View style={{ flex: 1, backgroundColor: '#d8efdf' }}>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 700,
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
              style={{
                borderColor: '#333',
                borderWidth: 1,
                width: '90%',
                height: 50,
                padding: 10,
              }}
              placeholder="Email"></TextInput>
  
            <TextInput
              style={{
                borderColor: '#333',
                borderWidth: 1,
                width: '90%',
                height: 50,
                padding: 10,
              }}
              placeholder="Password"></TextInput>
          </View>
  
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Pressable
              style={{
                backgroundColor: '#c34e3b',
                width: '90%',
                height: 50,
                padding: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  color: '#d8efdf',
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
  
        <View
          style={{
            marginTop: 10,
            flex: 4,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
            }}>
            <Text>When you agree to terms and conditions</Text>
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 4,
            }}>
            <Text
              style={{
                color: '#5d25fa',
              }}>
              For got your password?
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 4,
            }}>
            Or login with
          </Text>
  
          <View
            style={{
              width: '90%',
              height: 50,
              marginTop: 50,
              marginBottom: 30,
              flex: 1,
              flexDirection: 'row',
              justifyContent:'center'
            }}>
            <View style={{ flex: 1 }}>
              <Image
                source={{
                  uri: 'https://www.svgrepo.com/show/489934/facebook.svg',
                }}
                style={{ height: 50, resizeMode: 'contain', flex: 1 }} 
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={{
                  uri: 'https://www.svgrepo.com/show/475689/twitter-color.svg',
                }}
                style={{ height: 50, resizeMode: 'contain', flex: 1 }} 
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={{
                  uri: 'https://www.svgrepo.com/show/349394/google-plus.svg',
                }}
                style={{ height: 50, resizeMode: 'contain', flex: 1 }} 
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
  