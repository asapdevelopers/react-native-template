import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  Navigator,
  BackHandler
} from "react-native";
import { connect } from "react-redux";
import HeaderDetail from "../Components/HeaderDetail";
import JWPlayerBridgeView from "../NativeBridges/JWPlayerBridgeNativeView";

// Styles
import styles from "./Styles/VideoDetailScreenStyle";

class VideoDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null
    };
  }

  componentDidMount() {
    var { navigation, videos } = this.props;
    if (navigation.state.params) {
      let videoId = navigation.state.params.id;
      let selectedVideo = videos.results.find(v => v.id.videoId === videoId);
      this.setState({ video: selectedVideo });
    }

    BackHandler.addEventListener("hardwareBackPress", function() {
      navigation.goBack();
      return true;
    });
  }

  render() {
    const { video } = this.state;
    return (
      <View>
        <HeaderDetail
          title={video && video.snippet ? video.snippet.title : "Video detail"}
          navigation={this.props.navigation}
        />
        <KeyboardAvoidingView behavior="position">
          {video && (
            <JWPlayerBridgeView
              style={styles.video}
              poster={video.snippet.thumbnails.high.url}
              src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            />
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetailScreen);
