import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Heart } from 'lucide-react';

const products = [
  {
    image: require('../assets/xe01.png'),
    name: 'Pinarello',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },
  {
    image: require('../assets/xe01.png'),
    name: 'Pina Mountain',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },

  {
    image: require('../assets/xe01.png'),
    name: 'Pina Mountain',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },

  {
    image: require('../assets/xe01.png'),
    name: 'Pina Mountain',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },

  {
    image: require('../assets/xe01.png'),
    name: 'Pina Mountain',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },

  {
    image: require('../assets/xe01.png'),
    name: 'Pina Mountain',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },

  {
    image: require('../assets/xe01.png'),
    name: 'Pina Mountain',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },

  {
    image: require('../assets/xe01.png'),
    name: 'Pina Mountain',
    price: 1800,
    type: 'Mountain',
    description:
      'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
    discount: 0.4,
    liked: true,
  },
];

const Item = ({ name, img, price, liked }) => (
  <View
    style={{
      alignItems: 'center',
      paddingVertical: 10,
      width: '40%',
      position: 'relative',
      borderRadius: 5,
      marginHorizontal: '5%',
      marginVertical: '2%',
      backgroundColor: '#F7BA8326',
    }}>
    <Image
      source={img}
      style={{ resizeMode: 'contain', width: 60, height: 60 }}
    />

    <Text style={{}}>{name}</Text>
    <View style={{ flexDirection: 'row' }}></View>
    <Text style={{}}>$ {price.toLocaleString('vi-VN')}</Text>
    <View style={{ position: 'absolute', left: '4%' }}>
      <Heart color='#E94141' />
    </View>
  </View>
);

export default function Main({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#E94141',
            marginLeft: 10,
          }}>
          The world's Best Bike
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#E94141',
            borderWidth: 1,
            width: '20%',
            alignItems: 'center',
            borderRadius: 5,
            marginHorizontal: 10,
          }}>
          <Text style={{ color: '#E94141' }}> All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: '#E94141',
            borderWidth: 1,
            width: '20%',
            alignItems: 'center',
            borderRadius: 5,
            marginHorizontal: 10,
          }}>
          <Text style={{ color: '#E94141' }}> Roadbike</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: '#E94141',
            borderWidth: 1,
            width: '25%',
            alignItems: 'center',
            borderRadius: 5,
            marginHorizontal: 10,
          }}>
          <Text style={{ color: '#E94141' }}> Mountain</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 7,
          justifyContent: 'space-between',
        }}>
        <FlatList
          style={{}}
          data={products}
          renderItem={({ item }) => (
            <Item name={item.name} img={item.image} price={item.price} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
