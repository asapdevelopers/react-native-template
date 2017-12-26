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
  label: {
    textAlign: "center",
    color: Colors.snow
  },
  listContent: {
    zIndex: 1,
    padding: Metrics.baseMargin
  }
});
