import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import CardVideo from '../Components/CardVideo';
// Styles
import styles from "./Styles/VideosStyle";

class VideosScreen extends React.PureComponent {
  /************************************************************
   * STEP 1
   * This is an array of objects with the properties you desire
   * Usually this should come from Redux mapStateToProps
   *************************************************************/
  state = {
    dataObjects: [
      { title: "First Title", description: "First Description" },
      { title: "Second Title", description: "Second Description" },
      { title: "Third Title", description: "Third Description" },
      { title: "Fourth Title", description: "Fourth Description" },
      { title: "Fifth Title", description: "Fifth Description" },
      { title: "Sixth Title", description: "Sixth Description" },
      { title: "Seventh Title", description: "Seventh Description" }
    ]
  };

  renderRow({ item }) {
    return (
      <View style={styles.row}>
        <CardVideo />
      </View>
    );
  }
  keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={10}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VideosScreen);
