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
    Star,
  } from 'lucide-react';
  import { TextInput } from 'react-native-paper';
  
  const DATA = [
    {
      id: 1,
      name: 'Ca nấu lẩu, nấu mì mini',
      img: require('../assets/ca_nau_lau.png'),
      supplier: 'Devand',
      rate: 50,
      avgRate: 4,
      price: 120000,
    },
    {
      id: 2,
      name: '1KG Khô gà bơ tỏi',
      img: require('../assets/ga_bo_toi.png'),
      supplier: 'FK Food',
      rate: 50,
      avgRate: 4,
      price: 200000,
    },
    {
      id: 3,
      name: 'Xe cần cẩu đa năng',
      img: require('../assets/xa_can_cau.png'),
      supplier: 'Thế giới đồ chơi',
      rate: 50,
      avgRate: 4,
      price: 150000,
    },
    {
      id: 4,
      name: 'Đồ chơi dạng mô hình',
      img: require('../assets/do_choi_dang_mo_hinh.png'),
      supplier: 'Thế giới đồ chơi',
      rate: 50,
      avgRate: 4,
      price: 90000,
    },
    {
      id: 5,
      name: 'Lãnh đạo giản đơn',
      img: require('../assets/lanh_dao_gian_don.png'),
      supplier: 'Minh Long Book',
      rate: 50,
      avgRate: 2,
      price: 100000,
    },
  
    {
      id: 5,
      name: 'Lãnh đạo giản đơn',
      img: require('../assets/xa_can_cau.png'),
      supplier: 'Minh Long Book',
      rate: 50,
      avgRate: 4,
      price: 100000,
    },
    {
      id: 5,
      name: 'Lãnh đạo giản đơn',
      img: require('../assets/xa_can_cau.png'),
      supplier: 'Minh Long Book',
      rate: 50,
      avgRate: 4,
      price: 100000,
    },
  ];
  
  const Item = ({ name, img, supplier, rate, avgRate, price }) => (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 10,
        width: '48%',
      }}>
      <Image source={img} />
  
      <View style={{}}>
        <Text style={{}}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          {/* Render số sao dựa trên avgRate */}
          {[1, 2, 3, 4, 5].map((index) => (
            <Star
              key={index}
              style={{ fontSize: 10, width: 12 }}
              fill={index <= avgRate ? '#D8A25E' : 'gray'}
              strokeWidth={0}
            />
          ))}
        </View>
        <Text style={{}}>{price.toLocaleString('vi-VN')} VND</Text>
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
            height: '10%'
          }}>
          <ArrowLeft style={styles.headerIcons} />{' '}
          <TextInput
            label="Dây cáp Usb"
            mode="outlined"
            onChangeText={(text) => setText(text)}
            style={{ marginBottom: 16, paddingTop: 20, paddingBottom: 20 }}
            right={<TextInput.Icon name="magnify" />} // Icon tìm kiếm
          />
          <ShoppingCart style={styles.headerIcons} />
        </View>
  
        <View style={{ flex: 8 }}>
          <FlatList
            style={{}}
            data={DATA}
            renderItem={({ item }) => (
              <Item
                name={item.name}
                img={item.img}
                supplier={item.supplier}
                avgRate={item.avgRate}
                price={item.price}
              />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
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
      color: '#fff',
    },
  
    headerTitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  