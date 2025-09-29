import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import DareFeed from "./screens/DareFeed";
import "./global.css";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold">Welcome Home</Text>
      <TouchableOpacity
        className="bg-green-500 px-4 py-2 rounded-xl mt-4"
        onPress={() => navigation.navigate("Dare")}
      >
        <Text className="text-white">Go to Dare Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-500 px-4 py-2 rounded-xl mt-4"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-white">Go to Login Page</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dare" component={DareFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
