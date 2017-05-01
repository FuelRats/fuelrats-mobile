/*****************************************************************************\
  Third party module imports
\*****************************************************************************/

import React from 'react'
import { Text } from 'react-native'
import {
  Scene,
  Router
} from 'react-native-router-flux'





/*****************************************************************************\
  Local module imports
\*****************************************************************************/

// Components
import Login from './Login'

// Styles
import SceneStyles from '../styles/Scene'





/*****************************************************************************\
  Component
\*****************************************************************************/

export default class extends React.Component {
  render() {
    return <Router>
      <Scene key="root" style={SceneStyles.default}>
        <Scene key="login" component={Login} title="Login"/>
      </Scene>
    </Router>
  }
}

//        <Scene key="register" component={Register} title="Register"/>
//        <Scene key="home" component={Home}/>
