import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  ArrowLeft,
  ShoppingCart,
  Menu,
  House,
  CornerDownLeft,
} from 'lucide-react';

const DATA = [
  {
    id: 1,
    name: 'Ca nấu lẩu, nấu mì mini',
    img: require('../assets/ca_nau_lau.png'),
    supplier: 'Devand',
  },
  {
    id: 2,
    name: '1KG Khô gà bơ tỏi',
    img: require('../assets/ga_bo_toi.png'),
    supplier: 'FK Food',
  },
  {
    id: 3,
    name: 'Xe cần cẩu đa năng',
    img: require('../assets/xa_can_cau.png'),
    supplier: 'Thế giới đồ chơi',
  },
  {
    id: 4,
    name: 'Đồ chơi dạng mô hình',
    img: require('../assets/do_choi_dang_mo_hinh.png'),
    supplier: 'Thế giới đồ chơi',
  },
  {
    id: 5,
    name: 'Lãnh đạo giản đơn',
    img: require('../assets/lanh_dao_gian_don.png'),
    supplier: 'Minh Long Book',
  },

  {
    id: 5,
    name: 'Lãnh đạo giản đơn',
    img: require('../assets/xa_can_cau.png'),
    supplier: 'Minh Long Book',
  },
];

const Item = ({ name, img, supplier }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    }}>
    <View style={{ flex: 2 }}>
      <Image source={img} />
    </View>
    <View style={{ flex: 4 }}>
      <Text style={{}}>{name}</Text>
      <Text style={{}}>Shop: {supplier}</Text>
    </View>
    <View style={{ justifyContent: 'center', flex: 2 }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          backgroundColor: 'red',
          height: '40%',
          marginRight: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{ fontWeight: 'bold', color: 'white' }}>Chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function Screen01() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#295F98',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
        }}>
        <ArrowLeft style={styles.headerIcons} />{' '}
        <Text style={styles.headerTitle}>Chat</Text>{' '}
        <ShoppingCart style={styles.headerIcons} />
      </View>

      <View style={{ flex: 8 }}>
        <FlatList
          style={{}}
          data={DATA}
          renderItem={({ item }) => (
            <Item name={item.name} img={item.img} supplier={item.supplier} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#295F98',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Menu style={styles.headerIcons} />
        <House style={styles.headerIcons} />
        <CornerDownLeft style={styles.headerIcons} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  headerIcons: {
    margin: 12,
    color: '#fff'
  },

  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
