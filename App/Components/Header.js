import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Images from "../Themes/Images";
import styles from "./Styles/HeaderStyle";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchInput: ""
    };
  }

  render() {
    const { search, searchInput } = this.state;

    const searchState = (
      <View style={styles.searchContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => this.setState({ search: false })}>
            <Image source={Images.close} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
        </View>
        <TextInput
          value={searchInput}
          style={styles.searchInput}
          placeholder="Search video"
          onChangeText={text => this.setState({ searchInput: text })}
          underlineColorAndroid="transparent"
        />
        <View />
      </View>
    );

    const normalState = (
      <View style={styles.searchContainer}>
        <View />
        <Text>Videos</Text>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => this.setState({ search: true })}>
            <Image source={Images.search} style={{ width: 15, height: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
    );

    return (
      <View style={styles.headerContainer}>
        {search ? searchState : normalState}
      </View>
    );
  }
}
