import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../(tabs)/app";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem-vindo(a) à tela inicial!</Text>
      <Text>Este app foi feito com React Native + TypeScript.</Text>

      <Button
        title="Ver Detalhes"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Sobre o Desenvolvedor"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
