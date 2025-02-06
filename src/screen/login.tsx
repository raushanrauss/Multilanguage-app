import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useLanguage } from "../custom-hook/useLanguage";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { i18n } = useLanguage();
  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert(i18n.t("inValidPass"));
      return;
    }
    Alert.alert(i18n.t("loggedIn"));
    navigation.navigate("BatteryStatus");
  };

  return (
    <View style={tw`flex-1 justify-center px-6 bg-white`}>
      <Text style={tw`text-3xl font-bold text-center mb-8`}>
        {i18n.t("login")}
      </Text>

      <TextInput
        style={tw`border border-gray-300 p-3 rounded-lg mb-4`}
        placeholder={i18n.t("email")}
        keyboardType='email-address'
        autoCapitalize='none'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={tw`border border-gray-300 p-3 rounded-lg mb-4`}
        placeholder={i18n.t("password")}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={tw`bg-blue-500 p-3 rounded-lg`}
        onPress={handleSignIn}
      >
        <Text style={tw`text-white text-center font-semibold`}>
          {i18n.t("login")}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={tw`text-blue-500 text-center mt-4`}>
          {i18n.t("newUser")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
