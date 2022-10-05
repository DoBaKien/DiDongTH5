import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CusList from "./CusList";
import data from "../data/Data";

function Product({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.text1}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={(data) => <CusList a={data.item} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text1: {
    height: 60,
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    flex: 1,
  },
});

export default Product;
