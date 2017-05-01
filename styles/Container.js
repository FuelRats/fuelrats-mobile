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
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'space-between',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  contentWrapper: {
    backgroundColor: Colors.black,
    flex: 1,
  },
})
