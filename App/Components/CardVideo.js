import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Styles/CardVideoStyle";
import Images from "../Themes/Images";

export default class CardVideo extends Component {
  static propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  static defaultProps = {
    thumbnail: Images.youtubeLogo,
    title: "Video title",
    channelName: "Channel name",
    description: "Video description"
  };

  render() {
    const { thumbnail, title, channelName, description } = this.props;

    return (
      <View style={styles.cardContainer}>
        <View>
          <TouchableOpacity>
            <Image source={thumbnail} style={styles.cardCover} />
            <Image source={Images.play} style={styles.playCover} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <View>
            <Text>{channelName}</Text>
            <View>
              <Text>{description}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
