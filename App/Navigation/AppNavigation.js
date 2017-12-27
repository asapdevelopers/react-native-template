import { StackNavigator } from 'react-navigation';
import VideosScreen from '../Containers/VideosScreen'
import LaunchScreen from '../Containers/LaunchScreen';
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  VideosScreen: { screen: VideosScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'VideosScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
