import React from "react";
import { Button, StyleSheet, View } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go To Chat"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      />
      <View  style={styles.as}></View>
      <Button
        title="Go To Second Screen"
        style={styles.buton}
        onPress={() => {
          navigation.navigate("Thrid");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent:"space-evenly"
  },
});
export default Home;
