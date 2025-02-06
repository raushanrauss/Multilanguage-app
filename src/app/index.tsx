import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useLanguage } from "../custom-hook/useLanguage";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import tw from "twrnc";

const HomeScreen = () => {
  const { locale, setLocale, i18n } = useLanguage();
  const navigation = useNavigation();
  const [error, setError] = useState("");

  const data = {
    en: "This is sample data in English.",
    hi: "यह अंग्रेजी में नमूना डेटा है।",
    bn: "এটি ইংরেজিতে নমুনা ডেটা।",
    ta: "இது ஆங்கிலத்தில் மாதிரித் தரவு.",
    te: "ఇది ఇంగ్లీషులో నమూనా డేటా.",
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100 p-6`}>
      <Text style={tw`text-2xl font-bold mb-4`}>{i18n.t("welcome")}</Text>
      <Text style={tw`text-lg mb-6`}>
        Current Language: {locale.toUpperCase()}
      </Text>

      <View style={tw`w-64 border border-gray-300 rounded-lg mb-6`}>
        <Picker
          selectedValue={locale}
          onValueChange={(itemValue) => setLocale(itemValue)}
        >
          <Picker.Item label='English' value='en' />
          <Picker.Item label='Hindi' value='hi' />
          <Picker.Item label='Bengali' value='bn' />
          <Picker.Item label='Tamil' value='ta' />
          <Picker.Item label='Telugu' value='te' />
        </Picker>
      </View>

      <Text style={tw`text-lg text-gray-700 mb-4`}>{data[locale]}</Text>

      {error ? <Text style={tw`text-red-500 mb-4`}>{error}</Text> : null}

      <TouchableOpacity
        style={tw`bg-blue-500 px-6 py-3 rounded-lg mb-4`}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={tw`text-white font-semibold`}>{i18n.t("login")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
