//* RN IMPORTS //
import { StyleSheet, StatusBar, Dimensions, Platform } from "react-native";

//* STYLE CONSTANTS //
const { width, height } = Dimensions.get("window");
const Android = Platform.OS === "android";

//* THEME IMPORT //
import { colors } from '../../theme/Colors';

//* ANDROID STYLES //
export const andriod = StyleSheet.create({
  paddingTop: Android ? StatusBar.currentHeight : 0,
});

//* STYLES //
export const styles = StyleSheet.create({
  mainContnr: {
    flex: 1,
    backgroundColor: colors.wht,
  },
});
