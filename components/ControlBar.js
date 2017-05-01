/*****************************************************************************\
  Third party module imports
\*****************************************************************************/

import React from 'react'
import { View } from 'react-native'





/*****************************************************************************\
  Local module imports
\*****************************************************************************/

// Styles
import ControlBarStyles from '../styles/ControlBar'





/*****************************************************************************\
  Component
\*****************************************************************************/

export default class extends React.Component {
  render() {
    return <View style={ControlBarStyles.default}>
      {this.props.children}
    </View>
  }
}
