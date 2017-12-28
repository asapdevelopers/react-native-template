import { StyleSheet } from "react-native";
import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 250,
    borderRadius: 50,
    flexDirection: 'column'
  },
  cardCover: {
    height: 200
  },
  cardContent:{
    padding:15
  },
  divider:{
    flex:1,
    height:10,
    marginTop:3,
    marginBottom:3,
    backgroundColor: Colors.facebook
  },
  channelName:{
    fontSize:11,
    color: Colors.gray,
    marginBottom:3
  },
  title:{
    color: Colors.darkGray,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom:5
  },
  subtitle:{
    color: Colors.darkGray,
    fontSize:12,
    color: Colors.gray
  }
});
