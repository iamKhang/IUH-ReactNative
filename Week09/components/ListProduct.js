import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Item = ({ name, img, price, liked }) => (
  <View
    style={{
      alignItems: 'center',
      position: 'relative',
      borderRadius: 10,
      width: '48%',
      marginHorizontal: '1%',
      marginVertical: '2%',
      backgroundColor: '#F7BA8326',
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    }}>
    <Image
      source={{ uri: img }}
      style={{
        resizeMode: 'contain',
        width: 120,
        height: 120,
      }}
    />
    <Text
      style={{
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5,
      }}>
      {name}
    </Text>
    <Text
      style={{
        fontSize: 16,
        color: '#E94141',
        marginBottom: 5,
      }}>
      $ {price.toLocaleString('vi-VN')}
    </Text>
    <View style={{ position: 'absolute', top: 10, left: 10 }}>
    {liked === true ? <Heart color="#E94141" fill="#E94141" /> :<Heart color="#E94141" />}
      
    </View>
  </View>
);

export default function Main({ route, navigation }) {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]); 
  const [selectedType, setSelectedType] = useState('All'); 

  useEffect(() => {
    axios
      .get('https://66ff33ca2b9aac9c997e80a0.mockapi.io/api/bike_data')
      .then((res) => {
        setBikes(res.data);
        setFilteredBikes(res.data);
      })
      .catch((error) => {
        console.error('Có lỗi xảy ra khi lấy dữ liệu: ', error);
      });
  }, []);

 
  const filterBikes = (type) => {
    setSelectedType(type); 

    if (type === 'All') {
      setFilteredBikes(bikes); 
    } else {
      const filtered = bikes.filter((bike) => bike.type === type);
      setFilteredBikes(filtered); 
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '700',
            color: '#E94141',
          }}>
          The world's Best Bike
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            borderColor: selectedType === 'All' ? '#E94141' : '#E9414126',
            borderWidth: 1,
            width: '30%',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: 5,
            backgroundColor: selectedType === 'All' ? '#FFEAEA' : 'transparent',
          }}
          onPress={() => filterBikes('All')}>
          <Text
            style={{
              color: '#E94141',
              fontSize: 16,
              fontWeight: selectedType === 'All' ? '600' : '400',
            }}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: selectedType === 'Roadbike' ? '#E94141' : '#E9414126',
            borderWidth: 1,
            width: '30%',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: 5,
            backgroundColor: selectedType === 'Roadbike' ? '#FFEAEA' : 'transparent',
          }}
          onPress={() => filterBikes('Roadbike')}>
          <Text
            style={{
              color: '#E94141',
              fontSize: 16,
              fontWeight: selectedType === 'Roadbike' ? '600' : '400',
            }}>
            Roadbike
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: selectedType === 'Mountain' ? '#E94141' : '#E9414126',
            borderWidth: 1,
            width: '30%',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: 5,
            backgroundColor: selectedType === 'Mountain' ? '#FFEAEA' : 'transparent',
          }}
          onPress={() => filterBikes('Mountain')}>
          <Text
            style={{
              color: '#E94141',
              fontSize: 16,
              fontWeight: selectedType === 'Mountain' ? '600' : '400',
            }}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 12 }}>
        <FlatList
          data={filteredBikes}
          renderItem={({ item }) => (
            <Item name={item.name} img={item.imageUrl} price={item.price} liked={item.liked} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
}
