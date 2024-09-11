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
      <View style={{ flex: 1, backgroundColor: 'rgb(212, 244, 246)' }}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 50,
              textTransform: 'uppercase',
              fontWeight: 800,
            }}>
            code
          </Text>
        </View>
  
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>
            {' '}
            VERIFICATION
          </Text>
        </View>
  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginHorizontal: 30,
            }}>
            Enter ontime password sent on {'\n'} ++849092605798
          </Text>
        </View>
  
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {[...Array(6)].map((_, index) => (
            <TextInput
              key={index}
              maxLength={1}
              keyboardType="numeric"
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderColor: '#000',
                textAlign: 'center',
                fontSize: 18,
              }}
            />
          ))}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Pressable
          style={{
            backgroundColor: nextBtnActive ? "#FCDE70": "#e3c000", 
            width: '80%', 
            height: 40,
            justifyContent: "center",
            alignItems: "center" ,
            borderRadius: 5
          }}
          onHoverIn = {() => setNextBtnActive(true)}
          onHoverOut = {() => setNextBtnActive(false)}
  
          >
            <Text style={{
              fontSize: 20,
              fontWeight: 700
            }}>VERIFY CODE</Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            background:
              'linear-gradient(0deg, rgba(19,202,242,1) 45%, rgba(211,244,246,1) 100%)',
          }}></View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({});
  