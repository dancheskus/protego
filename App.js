import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './src/components/Login';
import MainScreen from './src/components/MainScreen';
import AuthLoading from './src/components/AuthLoading';

const defaultScreen = createStackNavigator({
  MainScreen: { screen: MainScreen, navigationOptions: { headerTitle: 'TEST' } },
});

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    Login,
    defaultScreen,
  })
);
