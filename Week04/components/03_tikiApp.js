import {
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    TextInput,
  } from 'react-native';
  import { useState } from 'react';
  import { Feather, MaterialIcons } from '@expo/vector-icons';
  
  export default function AssetExample() {
    const discountPrice = 79200;
    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState(0);
    const [amountFinal, setAmountFinal] = useState(0);
  
    function formatCurrency(value) {
      return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    }
  
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            width: '90%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 2,
            }}>
            <Image
              source={{
                uri: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9786043561272_1_1.jpg',
              }}
              style={{
                height: '100%',
                resizeMode: 'contain',
              }}></Image>
          </View>
          <View
            style={{
              flex: 3,
            }}>
            <Text style={styles.title}>
              Thỏ Bảy Màu Và Những Người Nghĩ Nó Là Bạn{' '}
            </Text>
            <Text style={styles.title}>Huỳnh Thái Ngọc </Text>
  
            <Text style={styles.discountPrice}>79.200 VND</Text>
  
            <Text style={styles.price}>99.000 VND</Text>
  
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 10,
                alignItems: 'center',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable
                  style={styles.btnPrev}
                  onPress={() => {
                    if (quantity > 0) setQuantity(quantity - 1);
                  }}>
                  <Feather name="minus" size={18} color="#0a5eb7" />
                </Pressable>
                <TextInput
                  value={quantity}
                  style={{
                    width: 50,
                    borderWidth: 1,
                    borderColor: '#c4c4c4',
                    textAlign: 'center',
                  }}
                />
                <Pressable
                  style={styles.btnNext}
                  onPress={() => {
                    setQuantity(quantity + 1);
                  }}>
                  <Feather name="plus" size={18} color="#0a5eb7" />
                </Pressable>
              </View>
  
              <View>
                <Pressable
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                  }}
                  onPress={() => {
                    setQuantity(quantity + 1);
                  }}>
                  <Text style={{ color: '#0a5eb7', fontWeight: 600 }}>
                    Mua sau
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: '15%',
            width: '90%',
          }}>
          <View
            style={{
              marginTop: '5%',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ flex: 2 }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                }}>
                Mã giảm giá đã lưu
              </Text>
            </View>
            <View style={{ flex: 3 }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#0a5eb7',
                }}>
                Xem tại đây
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '100%',
            }}>
            <View
              style={{
                flex: 3,
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
              }}>
              <View
                style={{
                  height: '30%',
                  width: '20%',
                  backgroundColor: '#f2dd1b',
                  marginHorizontal: '5%',
                }}></View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                }}>
                Mã giảm giá
              </Text>
            </View>
            <View
              style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
              <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0a5eb7',
                  height: '100%',
                  width: '70%',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: 15,
                  }}>
                  Áp dụng
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderColor: '#ccc',
            borderBottomWidth: 10,
            borderTopWidth: 10,
            marginTop: 20,
            paddingTop: '2%',
            paddingBottom: '4%',
            paddingHorizontal: '5%',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 700,
            }}>
            Bạn có phiếu tặng quà Tiki/Got it/Urbox?
          </Text>
          <Pressable>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 700,
                marginLeft: 4,
                color: '#0a5eb7',
              }}>
              Nhập tại đây?
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: '100%',
            borderColor: '#ccc',
            borderBottomWidth: 100,
            paddingTop: '2%',
            paddingBottom: '4%',
            paddingHorizontal: '5%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 700,
            }}>
            Tạm tính
          </Text>
          <Pressable>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                marginLeft: 4,
                color: '#e53935',
              }}>
              {
                formatCurrency(quantity*discountPrice)
              }
            </Text>
          </Pressable>
        </View>
  
        <View
          style={{
            flex: 1,
            width: '90%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginLeft: 4,
                color: '#ccc',
              }}>
              Thành tiền
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 700,
                marginLeft: 4,
                color: '#e53935',
              }}>
              {
                formatCurrency(quantity*discountPrice)
              }
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 2,
              width: '100%',
            }}>
            <Pressable
              style={{
                backgroundColor: '#e53935',
                paddingHorizontal: 10,
                paddingVertical: 8,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
              }}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 500 }}>
                TIẾN HÀNH ĐẶT HÀNG
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  
    title: {
      fontSize: 12,
      fontWeight: 500,
    },
  
    discountPrice: {
      color: 'red',
      fontWeight: 600,
      fontSize: 20,
    },
  
    price: {
      textDecorationLine: 'line-through',
    },
  
    // btn: {
    //   backgroundColor: '#4F75FF',
    //   width: '20%',
    //   height: 30,
    //   marginTop: 20,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
  
    btnPrev: {
      backgroundColor: '#c4c4c4',
      marginRight: 5,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnNext: {
      backgroundColor: '#c4c4c4',
      marginLeft: 5,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  