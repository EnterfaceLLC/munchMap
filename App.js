import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import openMap, { createOpenLink, createMapLink } from "react-native-open-maps";

export default function App() {


  const evergy = { latitude: 39.050756, longitude: -95.672579 };

  const openRoute = createOpenLink({ zoom: 15, start: Platform.OS === "ios" ? '4827 SW Misty Harbor Ave Topeka, KS' : null, end: "Helping Hands Humane Society" });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button color={"#bdc3c7"} onPress={openRoute} title="Click To Open Maps 🗺" />
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
