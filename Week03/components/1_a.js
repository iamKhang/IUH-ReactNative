import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default function Screen_1a() {
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
            uri: 'https://freepngtransparent.com/wp-content/uploads/2023/03/circle-png-117.png',
          }}
          style={{ width: 150, height: 150 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>
          {' '}
          GROW YOUR {'\n'} BUSINESS{' '}
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
          We will help you to grow your business using online server{' '}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Button style={{ width: 100 }} title="Login" color="rgb(227, 192, 0)" />
        <Button
          style={{ width: 100 }}
          title="Sign up"
          color="rgb(227, 192, 0)"
        />
      </View>
      <View
        style={{
          flex: 1,
          background: 'linear-gradient(0deg, rgba(19,202,242,1) 45%, rgba(211,244,246,1) 100%)'
        }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
