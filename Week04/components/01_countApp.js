import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";

export default function AssetExample() {
  const [num, setNum] = useState(0);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 70,
        }}
      >
        {num}{" "}
      </Text>

      <Pressable
        style={styles.btn}
        onPress={() => {
          setNum(num + 1);
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: 400,
          }}
        >
          COUNT
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "#4F75FF",
    width: "20%",
    height: 30,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});