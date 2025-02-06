import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { useLanguage } from "../custom-hook/useLanguage";

const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { i18n } = useLanguage();

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    Alert.alert(i18n.t("registered"));
    // Navigate to sign-in screen or home
    navigation.navigate("Login");
  };

  return (
    <View style={tw`flex-1 justify-center px-6 bg-white`}>
      <Text style={tw`text-3xl font-bold text-center mb-8`}>
        {i18n.t("signup")}
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

      <TextInput
        style={tw`border border-gray-300 p-3 rounded-lg mb-4`}
        placeholder={i18n.t("confirmPass")}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={tw`bg-blue-500 p-3 rounded-lg`}
        onPress={handleSignUp}
      >
        <Text style={tw`text-white text-center font-semibold`}>
          {i18n.t("signup")}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={tw`text-blue-500 text-center mt-4`}>
          {/* Already have an account? Sign In */}
          {i18n.t("oldUser")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
