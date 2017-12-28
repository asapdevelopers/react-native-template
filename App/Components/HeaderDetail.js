import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Images from "../Themes/Images";
import styles from "./Styles/HeaderStyle";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeaderDetail extends Component {
  render() {
    const { title, navigation } = this.props;

    return (
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.closeContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Icon name="angle-left" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.closeContainer}>
            <TouchableOpacity>
              <Icon name="ellipsis-v" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
