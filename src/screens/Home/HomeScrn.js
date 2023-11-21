//* REACT IMPORT //
import React from "react";

//* RN IMPORT //
import { View, Text, Button, SafeAreaView } from "react-native";

//* RN OPEN MAPS IMPORT //
import { createOpenLink } from "react-native-open-maps";

//* STYLES IMPORT //
import { styles, andriod } from "./styles";

//* HOME SCREEN CODE //
const HomeScrn = () => {

  const destination = {
    a: 'Helping Hands Humane Society',
    b: 'Evergy Plaza',
    c: 'Mommy & Me',
    d: 'Jacs Liquor',
    e: 'The Wheel Barrel',
  };

  const openRoute = createOpenLink({
    zoom: 15,
    provider: "google",
    end: destination.c,
  });


  return (
    <SafeAreaView style={[styles.mainContnr, andriod ]}>
      <Text>Home Screen</Text>
            <Button
        color={"#bdc3c7"}
        onPress={openRoute}
        title="Click To Open Google Maps 🗺"
      />
    </SafeAreaView>
  );
};

export default HomeScrn;
