import React from "react";
import { ViewStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Icon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  style?: ViewStyle;
}) {
  return <Ionicons size={28} {...props} />;
}
