//* REACT IMPORT //
import React from "react";

//* RN IMPORT //
import { View, Text, Button, SafeAreaView } from "react-native";

//* RN NAVIGATION IMPORT //
import { useNavigation } from "@react-navigation/native";

//* STYLES IMPORT //
import { styles, andriod } from "./styles";

//* HOME SCREEN CODE //
const HomeScrn = () => {
  const navigation = useNavigation();

  const profileHndlr = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={[styles.mainContnr, andriod]}>
      <Text>Home Screen</Text>
      <Button
        color={"#bdc3c7"}
        onPress={profileHndlr}
        title="Click To Open Profile"
      />
    </SafeAreaView>
  );
};

export default HomeScrn;
