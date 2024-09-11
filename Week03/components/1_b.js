import { Text, View, StyleSheet, Button, Image, Pressable } from 'react-native';
import {useState} from 'react'

export default function Screen_1a() {

  const [nextBtnActive, setNextBtnActive] = useState(false)



  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(212, 244, 246)' }}>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/61/61457.png',
          }}
          style={{ width: 150, height: 150 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>
          {' '}
          FORGET {'\n'} PASSWORD{' '}
        </Text>

        
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginHorizontal: 30,
          }}>
          {' '}
          Provide your account’s email for which you want to reset your password
        </Text>
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
          height: 30,
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
          }}>NEXT</Text>
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
