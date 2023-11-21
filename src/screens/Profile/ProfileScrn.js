//* REACT IMPORT //
import React from "react";

//* RN IMPORT //
import { View, Text, Button, SafeAreaView } from "react-native";

//* RN NAVIGATION IMPORT //
import { useNavigation } from "@react-navigation/native";

//* STYLES IMPORT //
import { styles, andriod } from "./styles";

//* PROFILE SCREEN CODE //
const ProfileScrn = () => {

    const navigation = useNavigation();

  const calendarHndlr = () => {
    navigation.navigate("Calendar");
  };

  return (
    <SafeAreaView style={[styles.mainContnr, andriod ]}>
      <Text>Home Screen</Text>
            <Button
        color={"#bdc3c7"}
        onPress={calendarHndlr}
        title="Click To Open Calendar Events"
      />
    </SafeAreaView>
  );
};

export default ProfileScrn;
