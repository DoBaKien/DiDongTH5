
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Thrid from "./screens/Thrid";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Chat" component={Product}></Stack.Screen>
        <Stack.Screen name="Thrid" component={Thrid}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
