import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import styles from "./Styles/CardVideoStyle";
import Images from "../Themes/Images";
import { Card, Subtitle, Caption, Image } from "@shoutem/ui";

export default class CardVideo extends Component {
  static propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
    description: PropTypes.string,
    onPressVideo: PropTypes.func
  };

  static defaultProps = {
    thumbnail: Images.youtubeLogo,
    title: "Video title",
    channelName: "Channel name",
    description: "Video description"
  };

  render() {
    const {
      thumbnail,
      title,
      channelName,
      description,
      onPressVideo,
      id,
      navigation
    } = this.props;

    return (
      <View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate("VideoDetailScreen", { id })}
          >
            <Image
              resizeMode="cover"
              style={{ height: 200 }}
              source={{ uri: thumbnail }}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.channelName}>{channelName}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{description}</Text>
        </View>
      </View>
    );
  }
}
