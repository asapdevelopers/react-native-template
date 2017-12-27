import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import ReduxNavigation from "../Navigation/ReduxNavigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as VideoActions from "../Store/actions/videos";
// Styles
import styles from "./Styles/RootContainerStyles";

class RootContainer extends Component {
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.videos
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  videoActions: bindActionCreators(VideoActions, dispatch)
});

export default connect(null, mapDispatchToProps)(RootContainer);