import React from "react";
import { bindActionCreators } from "redux";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import I18n from "react-native-i18n";
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
        <CardVideo
          title={item.snippet.title}
          channelName={item.snippet.channelTitle}
          description={item.snippet.description}
          thumbnail={item.snippet.thumbnails.high.url}
        />
      </View>
    );
  }

  keyExtractor = (item, index) => index;

  render() {
    const { videos, videoActions } = this.props;
    return (
      <View style={styles.container}>
        <Header onSearch={videoActions.clear} search={videoActions.list} />
        {videos.loading && (
          <ActivityIndicator style={styles.indicator} size={50} />
        )}
        {videos.results.length != 0 && (
          <FlatList
            contentContainerStyle={styles.listContent}
            data={videos.results}
            renderItem={this.renderRow}
            keyExtractor={this.keyExtractor}
            initialNumToRender={10}
          />
        )}
        {videos.results.length == 0 && <Text style={styles.noVideos}>{I18n.t("no_videos")}</Text>}
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
