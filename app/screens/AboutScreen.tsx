import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../(tabs)/app";
import { useNavigation } from "@react-navigation/native";

type AboutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "About"
>;

export default function AboutScreen() {
  const navigation = useNavigation<AboutScreenNavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sobre o Desenvolvedor</Text>
      <Text>Nome: Naki "a.k.a Leando Santana"</Text>
      <Text>Contato: leandro.santana10@fatec.sp.gov.br</Text>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
