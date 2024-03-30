import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ViewStyle,
  Platform,
} from "react-native";
import Colors from "@/constants/Colors";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "success"
  | "ghost"
  | "white";

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  containerRadius?: number;
  variant?: ButtonVariant;
  onPress?: () => void;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const isWeb = Platform.OS === "web";

const Button = ({
  children,
  containerRadius = 15,
  variant = "default",
  onPress,
}: Props) => {
  const styles = createStyles({ containerRadius, variant });

  return (
    <Pressable style={styles.rootContainer} onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </Pressable>
  );
};

const createStyles = ({
  containerRadius,
  variant,
}: {
  containerRadius: number;
  variant: ButtonVariant;
}) => {
  const rootContainer: ViewStyle = {
    width: "100%",
    borderRadius: containerRadius,
  };

  const container: ViewStyle = {
    width: "100%",
    padding: 12,
    borderRadius: containerRadius,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: Colors.dark.background,
  };

  if (variant === "outline") {
    container.borderColor = "gray";
    container.borderWidth = 0.5;
    container.backgroundColor = Colors.dark.transparent;
  }

  return StyleSheet.create({ rootContainer, container });
};

export default Button;
