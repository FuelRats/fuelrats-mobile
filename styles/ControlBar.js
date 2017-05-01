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
    backgroundColor: Colors.black,
    borderTopColor: Colors.red,
    borderTopWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  button: {
    flexGrow: 1,
    margin: 20,
  }
})
