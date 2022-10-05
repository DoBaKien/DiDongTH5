import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const CusList2 = ({ a }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: a.image,
        }}
      />
      <View>
        <View style={styles.content}>
          <Text>{a.name}</Text>
        </View>
        <View style={styles.star}>
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={require("../data/Star1.png")}
          />
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={require("../data/Star1.png")}
          />
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={require("../data/Star1.png")}
          />
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={require("../data/Star1.png")}
          />
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={require("../data/Star1.png")}
          />
          <Text style={{ fontSize: 10, marginTop: 4 }}>(57)</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 15, marginTop: 4 }}>69.900 đ</Text>
          <Text style={{ fontSize: 15, marginTop: 4 }}>-39%</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  star: {
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  tinyLogo: {
    resizeMode: 'stretch',
    height: 100,
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
});
export default CusList2;
