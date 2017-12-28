import { StyleSheet } from "react-native";
import { ApplicationStyles, Metrics, Colors } from "../../Themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    position: "relative"
  },
  video:{
    flex:1,
    height: 250,
    width: Metrics.screenWidth
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    borderRadius: 5,
    justifyContent: "center"
  },
  boldLabel: {
    fontWeight: "bold",
    alignSelf: "center",
    color: Colors.snow,
    textAlign: "center",
    marginBottom: Metrics.smallMargin
  },
  noVideos:{
    fontSize:18,
    marginTop:20,
    textAlign:"center"
  },
  label: {
    textAlign: "center",
    color: Colors.snow
  },
  listContent: {
    zIndex: 1,
    padding: Metrics.baseMargin
  },
  indicator:{
    marginTop:50
  }
});
