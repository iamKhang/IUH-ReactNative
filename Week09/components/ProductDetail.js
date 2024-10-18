import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react';

export default function ProductDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
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
              resizeMode: 'contain',
              borderRadius: 50,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={{ fontWeight: 500, fontSize: 16 }}>Pina Mountain</Text>
        <View style={{ flexDirection: 'row', width: '90%' }}>
          <Text style={{ fontWeight: 500, fontSize: 16 }}>15% OFF 350$</Text>
          <Text style={{ fontWeight: 500, fontSize: 16, marginLeft: 30 }}>
            449$
          </Text>
        </View>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 16,
            width: '100%',
            flexWrap: 'nowrap',
          }}>
          Description
        </Text>
        <View>
          <Text style={{ fontSize: 14, width: '100%', flexWrap: 'wrap' }}>
            It is a very important form of writing as we write almost everything
            in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>

        <View
          style={{
            height: '20%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '10%',
              borderRadius: 5,
              marginBottom: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('ListProduct')}>
            <Heart color="#E94141" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              background: '#E94141',
              height: '100%',
              width: '70%',
              borderRadius: 5,
              marginBottom: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('ListProduct')}>
            <Text style={{ color: '#fff', fontWeight: 500 }}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
