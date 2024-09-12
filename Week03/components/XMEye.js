import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import { useState } from 'react';
import { RadioButton, TextInput } from 'react-native-paper';

export default function Screen_1a() {
  const [nextBtnActive, setNextBtnActive] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
        }}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/14/07/eye-162182_640.png',
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View
        style={{
          flex: 5,
        }}>
        <View
          style={{
            flex: 1,
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
            left={<TextInput.Icon style={styles.icon} icon="lock" />}
            right={<TextInput.Icon style={styles.icon} icon="eye" />}
          />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Pressable
            style={{
              backgroundColor: '#386ffc',
              width: '90%',
              height: 50,
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
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
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Register</Text>
          <Text>Forgot password</Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderTopWidth: 1,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative',
            borderTopColor: '#386ffc',
          }}>
          <Text
            style={{
              position: 'absolute',
              top: '-12%',
              left: '50%',
              transform: [{ translateX: -70 }],
              zIndex: 1,
              backgroundColor: '#fff',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
            Orther Login Methods
          </Text>

          <View style={{
            flex:1, flexDirection: 'row', marginTop:'5%'
          }}>
            <View style={{ flex: 1, height: '50%' }}>
              <Image
                source={{
                  uri: 'https://www.svgrepo.com/show/467498/add-user-left-3.svg',
                }}
                style={{ height: 40, resizeMode: 'contain', flex: 1 }}
              />
            </View>
            <View style={{ flex: 1, height: '50%' }}>
              <Image
                source={{
                  uri: 'https://www.svgrepo.com/show/194733/cloud-computing-wifi.svg',
                }}
                style={{ height: 40, resizeMode: 'contain', flex: 1 }}
              />
            </View>
            <View style={{ flex: 1, height: '50%' }}>
              <Image
                source={{
                  uri: 'https://www.svgrepo.com/show/489934/facebook.svg',
                }}
                style={{ height: 40, resizeMode: 'contain', flex: 1 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },

  icon: {
    color: '#386ffc',
  },
});
