import React from "react";
import { View, Text, FlatList } from "react-native";
import { useLanguage } from "../custom-hook/useLanguage";
import tw from "twrnc";

const BatteryStatus = () => {
  const { i18n } = useLanguage();

  const batteryData = [
    {
      id: "BAT001",
      chargeLevel: "85%",
      temperature: "32°C",
      status: "available",
    },
    { id: "BAT002", chargeLevel: "60%", temperature: "34°C", status: "inUse" },
    {
      id: "BAT003",
      chargeLevel: "90%",
      temperature: "30°C",
      status: "available",
    },
    { id: "BAT004", chargeLevel: "40%", temperature: "36°C", status: "inUse" },
    {
      id: "BAT005",
      chargeLevel: "75%",
      temperature: "33°C",
      status: "available",
    },
  ];

  const statusColors = {
    available: "bg-green-500",
    inUse: "bg-red-500",
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-xl font-bold mb-4 text-center`}>
        {i18n.t("batteryInfo")}
      </Text>

      <FlatList
        data={batteryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={tw`bg-white shadow-lg rounded-lg p-4 mb-4 border border-gray-200`}
          >
            <Text style={tw`text-lg font-semibold text-gray-800`}>
              {i18n.t("batteryId")}: {item.id}
            </Text>
            <Text style={tw`text-gray-600`}>
              {i18n.t("chargeLevel")}: {item.chargeLevel}
            </Text>
            <Text style={tw`text-gray-600`}>
              {i18n.t("temperature")}: {item.temperature}
            </Text>
            <View
              style={tw`mt-2 px-3 py-1 rounded-full ${
                statusColors[item.status]
              } w-24`}
            >
              <Text style={tw`text-white text-center text-sm font-semibold`}>
                {i18n.t(item.status)}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BatteryStatus;
