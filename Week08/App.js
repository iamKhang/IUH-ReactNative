import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen02 from './components/Screen02';
import Screen01 from './components/Screen01';
import Screen03 from './components/Screen03';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen
          name="Screen03"
          component={Screen03}
        />
        <Stack.Screen
          name="Screen02"
          component={Screen02}
        />
        <Stack.Screen
          name="Screen01"
          component={Screen01}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
