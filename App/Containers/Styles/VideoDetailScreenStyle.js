import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  video:{
    flex:1,
    height: 250,
    width: Metrics.screenWidth
  },
})
