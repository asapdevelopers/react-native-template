import { StyleSheet, Platform } from "react-native";
import Fonts from "../../Themes/Fonts";
import Metrics from "../../Themes/Metrics";
import Colors from "../../Themes/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  title:{
    fontSize:18
  },
  headerContainer: {
    borderWidth: 1,
    backgroundColor: Colors.snow,
    marginTop: Platform.OS === "ios" ? 22 : 0,
    height: Metrics.navBarHeight,
    borderBottomColor: Colors.transparent,
    borderTopColor: Colors.transparent,
    borderLeftColor: Colors.transparent,
    borderRightColor: Colors.transparent
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: Metrics.navBarHeight
  },

  closeContainer: {
    marginVertical: 20,
    marginHorizontal: 15
  },
  searchInput: {
    height: 40,
    width: Metrics.screenWidth * 0.7,
    marginVertical: 20
  }
});
