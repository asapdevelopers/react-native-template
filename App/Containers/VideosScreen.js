import React from "react";
import { bindActionCreators } from "redux";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import CardVideo from "../Components/CardVideo";
import { NavigationBar, Button } from "@shoutem/ui";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../Components/Header";
import * as VideoActions from "../Store/actions/videos";
// Styles
import styles from "./Styles/VideosStyle";

class VideosScreen extends React.PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.videoActions.list("React");
  }

  renderRow({ item }) {
    return (
      <View style={styles.row}>
        <CardVideo />
      </View>
    );
  }

  keyExtractor = (item, index) => index;

  render() {
    const { videos } = this.props;
    return (
      <View style={styles.container}>
        <Header />
        {videos.length != 0 && (
          <FlatList
            contentContainerStyle={styles.listContent}
            data={videos}
            renderItem={this.renderRow}
            keyExtractor={this.keyExtractor}
            initialNumToRender={10}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos,
  loading: state.loading
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  videoActions: bindActionCreators(VideoActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(VideosScreen);
