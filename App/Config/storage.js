import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage, // Change it to localstorage on the web version
  enableCache: true
});

export default storage;
