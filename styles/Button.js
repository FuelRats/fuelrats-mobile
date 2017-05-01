/*****************************************************************************\
  Third party module imports
\*****************************************************************************/

import { StyleSheet } from 'react-native'





/*****************************************************************************\
  Local module imports
\*****************************************************************************/

import Colors from './Colors'





/*****************************************************************************\
  Stylesheet
\*****************************************************************************/

export default StyleSheet.create({
  default: {
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
  },

  primary: {
    backgroundColor: Colors.red,
  },

  text: {
    color: Colors.white,
  },
})
