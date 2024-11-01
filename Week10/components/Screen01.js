import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Mail, ArrowRight } from 'lucide-react';

export default function Screen01({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 7 }}>
        <View
          style={{
            flex: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/shin.jpg')}
            style={{
              height: 200,
              width: 200,
              resizeMode: 'cover',
              borderRadius: 50, 
            }}
          />
        </View>

        <View style={{ flex: 3, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 800, color: '#295F98' }}>
            MANAGE YOUR
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 800, color: '#295F98' }}>
            TASK
          </Text>
          <View
            style={{
              backgroundColor: '#ccc',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 2,
              marginTop: 4,
              borderRadius: 5,
            }}>
            <Mail />
            <TextInput
              style={{ paddingLeft: 4 }}
              placeholder="Enter your name"
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#295F98',
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingVertical: 5,
          }}
          onPress={() => navigation.navigate('Screen02')}>
          <Text style={{ fontWeight: 400, color: '#fff' }}>GET STARTED</Text>
          <ArrowRight style={{ color: '#fff' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
