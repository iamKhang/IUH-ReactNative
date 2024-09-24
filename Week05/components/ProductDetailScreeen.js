import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function ProductDetailScreeen({ navigation, route }) {
  const productList = [
    {
      color: 'black',
      imageUrl: require('../assets/vs_black.png'),
      name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
      price: '1.790.000 đ',
      totalRate: 828,
    },
    {
      color: 'red',
      imageUrl: require('../assets/vs_red.png'),
      name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
      price: '1.790.000 đ',
      totalRate: 828,
    },
    {
      color: 'blue',
      imageUrl: require('../assets/vs_blue.png'),
      name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
      price: '1.790.000 đ',
      totalRate: 828,
    },
    {
      color: 'silver',
      imageUrl: require('../assets/vs_silver.png'),
      name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
      price: '1.790.000 đ',
      totalRate: 828,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(productList[0]);

  const selectProductByColor = (color) => {
    const product = productList.find((p) => p.color === color);
    if (product) {
      setSelectedProduct(product);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 8 }}>
        <View
          style={{
            flex: 4,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}>
          <Image
            source={selectedProduct.imageUrl}
            style={{ resizeMode: 'contain', width: '40%', height: '100%' }}
          />
          <View>
            <Text>{selectedProduct.name}</Text>
            <Text style={{ fontWeight: 'bold' }}>Màu: {selectedProduct.color}</Text>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>{selectedProduct.price}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            backgroundColor: '#ccc',
          }}>
          <View style={{ width: '100%' }}>
            <Text>Chọn một màu bên dưới: </Text>
          </View>
          <Pressable
            style={[styles.colorButton, { backgroundColor: '#c5f1fb' }]}
            onPress={() => selectProductByColor('silver')}
          />
          <Pressable
            style={[styles.colorButton, { backgroundColor: '#c00a0a' }]}
            onPress={() => selectProductByColor('red')}
          />
          <Pressable
            style={[styles.colorButton, { backgroundColor: '#000' }]}
            onPress={() => selectProductByColor('black')}
          />
          <Pressable
            style={[styles.colorButton, { backgroundColor: '#234896' }]}
            onPress={() => selectProductByColor('blue')}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: '#ccc',
        }}>
        <Pressable
          style={styles.submitButton}
          onPress={() =>
            navigation.navigate('ProductScreen', {
              color: selectedProduct.color,
              name: selectedProduct.name,
              totalRate: selectedProduct.totalRate,
              price: selectedProduct.price,
              image: selectedProduct.imageUrl,
            })
          }>
          <Text style={{ color: 'white' }}>XONG</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorButton: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 70,
  },
  submitButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0081f1',
    borderRadius: 5,
    width: '80%',
  },
});
