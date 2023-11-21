//* REACT IMPORTS //
import React, { useState, useEffect } from "react";

//* EXPO IMPORT //
import * as Location from "expo-location";

//* ROOT IMPORT //
import { Root } from "./src/utils/Root";

//* APP ENTRY //
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



  return (
    <Root />
  );
};
