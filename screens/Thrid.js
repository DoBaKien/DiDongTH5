import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CusList2 from "./CusList2";
import data1 from "../data/Data1";

function Thrid({ navigation }) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          keyExtractor={(data1) => data1.key}
          data={data1}
          renderItem={(data1) => <CusList2 a={data1.item} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Thrid;
