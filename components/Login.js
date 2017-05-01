/*****************************************************************************\
  Third party module imports
\*****************************************************************************/

import React from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'
import {
  Scene
} from 'react-native-router-flux'





/*****************************************************************************\
  Local module imports
\*****************************************************************************/

// Components
import ControlBar from './ControlBar'

// Styles
import Colors from '../styles/Colors'

import ButtonStyles from '../styles/Button'
import ControlBarStyles from '../styles/ControlBar'
import ContainerStyles from '../styles/Container'
import HelperStyles from '../styles/Helper'
import SceneStyles from '../styles/Scene'
import TextInputStyles from '../styles/TextInput'
import TextStyles from '../styles/Text'





/*****************************************************************************\
  Component
\*****************************************************************************/

export default class extends React.Component {
  render() {
    return <View style={ContainerStyles.default}>
      <View style={ContainerStyles.contentWrapper}>
        <View style={[ContainerStyles.content, HelperStyles.centered]}>
          <Text style={[TextStyles.default, TextStyles.h1]}>Fuelrats Login</Text>

          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor={Colors.white}
            returnKeyType="next"
            style={TextInputStyles.default} />

          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.white}
            returnKeyType="done"
            secureTextEntry={true}
            style={TextInputStyles.default} />
        </View>
      </View>

      <ControlBar>
        <TouchableHighlight style={[ButtonStyles.default, ButtonStyles.primary, ControlBarStyles.button]}>
          <Text style={ButtonStyles.text}>Login</Text>
        </TouchableHighlight>
      </ControlBar>
    </View>
  }
}
