//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'
import PropTypes from 'prop-types';

const JWPlayerBridge = requireNativeComponent('JWPlayerBridge', JWPlayerBridgeView)

export default class JWPlayerBridgeView extends Component {
  render () {
    return <JWPlayerBridge {...this.props} />
  }
}

JWPlayerBridgeView.propTypes = {
  exampleProp: PropTypes.string
}
