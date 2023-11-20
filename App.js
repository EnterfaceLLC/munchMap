import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import openMap, { createOpenLink, createMapLink } from "react-native-open-maps";

import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      let currentLocal = await Location.getCurrentPositionAsync({});
      setLocation(currentLocal);
      console.log("Permission granted", currentLocal);
    };

    getPermission();
  }, []);

  // const geoCode = async () => {
  //   const geoLocal = await Location.geocodeAsync(myAddress);
  //   console.log("Geo-Location:", geoLocal);
  // };

  // const reverseCode = async () => {
  //   const reverseLocal = await Location.reverseGeocodeAsync({
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //   }, {
  //     useGoogleMaps: true,
  //   });

  //   console.log("ReverseGeo:", reverseLocal);
  // };

  const openRoute = createOpenLink({
    zoom: 15,
    provider: "google",
    end: "Helping Hands Humane Society, Topeka, KS",
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        color={"#bdc3c7"}
        onPress={openRoute}
        title="Click To Open Maps 🗺"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
