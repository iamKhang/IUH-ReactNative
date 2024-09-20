import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Star, ShieldQuestion, ChevronRight } from 'lucide-react-native';

export default function ProductScreen({ route, navigation }) {
  const { color, name, totalRate, price, image } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ flex: 8}}>
        <View
          style={{
            flex: 6,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={require('../assets/vs_black.png')}
            style={{ resizeMode: 'contain', width: '70%', height: '100%' }}
          />
        </View>
        <View style={{ flex: 4, justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%',
            }}>
            <View style={{ flexDirection: 'row' }}>
              {' '}
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </View>
            <Text>(Xem {totalRate} đánh giá)</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              width: '90%',
            }}>
            <Text style={{ fontSize: 17, fontWeight: '700' }}>{price}</Text>
            <Text
              style={{ textDecorationLine: 'line-through', marginLeft: '20%' }}>
              {price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#fa0000',
                textTransform: 'uppercase',
                marginTop: 10,
              }}>
              Ở đâu rẻ hơn hoàn tiền
            </Text>
            <Text
              style={{
                fontWeight: '700',
                color: '#000',
                marginTop: 10,
                marginLeft: 8,
              }}>
              <ShieldQuestion style={{ width: 20, height: 20 }} />
            </Text>
          </View>

          <Pressable
            style={{
              borderWidth: 1,
              height: 40,
              width: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>4 MÀU - CHỌN MÀU ></Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Pressable
          style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ee0a0a',
            borderRadius: 5,
            width: '80%'
          }}>
          <Text style={{color: 'white'}}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
