import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import Login from './src/components/Login';
import Finance from './src/components/Finance';
import AuthLoading from './src/components/AuthLoading';
import { logout } from './src/components/common/authHelper';

const BurgerMenuIcon = styled(Icon)`
  padding-left: 10;
`;

const AddItemIcon = styled(Icon)`
  padding-right: 10;
`;

const defaultScreen = createStackNavigator(
  {
    Finance: { screen: Finance, navigationOptions: { headerTitle: 'Финансы' } },
  },
  {
    defaultNavigationOptions: ({ navigation: { navigate } }) => ({
      headerLeft: <BurgerMenuIcon onPress={() => logout(navigate)} name="md-menu" size={30} />,
      headerRight: <AddItemIcon name="md-add-circle" size={30} />,
    }),
  }
);

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    Login,
    defaultScreen,
  })
);
