import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Images from "../Themes/Images";
import styles from "./Styles/HeaderStyle";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchInput: ""
    };
  }

  startSearching = () => {
    this.props.onSearch();
    this.setState({ search: true });
  };

  search = () => {
    this.props.search(this.state.searchInput);
    this.setState({ search: false });
    this.setState({ searchInput: '' });
  };

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
          returnKeyType="search"
          onSubmitEditing={this.search}
          placeholder="Search video"
          onChangeText={text => this.setState({ searchInput: text })}
          underlineColorAndroid="transparent"
        />
        <View />
      </View>
    );

    const normalState = (
      <View style={styles.searchContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => this.setState({ search: true })}>
            <Icon name="bars" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Videos</Text>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => this.startSearching()}>
            <Icon name="search" size={20} color="black" />
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
