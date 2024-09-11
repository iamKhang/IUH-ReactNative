import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function FirstScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(0, 204, 249)' }}>
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
    </View>
  );
}

const styles = StyleSheet.create({});
