import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Main({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 14, fontWeight: '700' }}>
          A premium online store for
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '700' }}>
          sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          flex: 5,

          padding: 5,
        }}>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E941411A',
            borderRadius: 10,
          }}>
          <Image
            source={require('../assets/xe01.png')}
            style={{
              height: '80%',
              // width: 200,
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontWeight: 500, fontSize: 16 }}>POWER BIKE SHOP</Text>

        <TouchableOpacity
          style={{
            background: '#E94141',
            height: '20%',
            width: '80%',
            borderRadius: 5,
            marginBottom: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('ListProduct')}>
          <Text style={{ color: '#fff', fontWeight: 500 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
