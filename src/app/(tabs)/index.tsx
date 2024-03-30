import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { Icon } from "@/components/Icon";

export default function TabOneScreen() {
  const onPrimaryButtonHandler = () => {};
  const onSecondaryButtonHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image
          resizeMode="cover"
          style={styles.cover}
          source={require("../../../assets/images/splash-cover-02.jpeg")}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Welcome To Cookpad</Text>
        <Text style={styles.description}>
          The Best Cooking and food recipes app of the century
        </Text>
        <Button containerRadius={30} onPress={onPrimaryButtonHandler}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Icon
            name="arrow-forward-circle"
            color="white"
            style={{
              marginLeft: 20,
              marginRight: -40,
            }}
          />
        </Button>
        <Button
          containerRadius={30}
          variant="outline"
          onPress={onSecondaryButtonHandler}
        >
          <Text style={styles.buttonTextOutline}>Login</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
  },
  footer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "SpaceGroteskBold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "SpaceGroteskRegular",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "SpaceGroteskBold",
    color: Colors.dark.text,
  },
  buttonIcon: {
    marginLeft: 10,
    marginRight: -20,
  },
  buttonTextOutline: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "SpaceGroteskBold",
    color: Colors.light.text,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
