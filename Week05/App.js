import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import ProductScreen from './components/ProductScreen';
import ProductDetailScreeen from './components/ProductDetailScreeen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          initialParams={{
            color: 'black',
            imageUrl: '../assets/vs_black.png',
            name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
            price: '1.790.000 đ',
            totalRate: 828
          }}
        />
        <Stack.Screen
          name="ProductDetailScreeen"
          component={ProductDetailScreeen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
