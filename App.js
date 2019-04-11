import React from 'react';
import { Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import { logout } from './src/components/common/authHelper';
import Login from './src/components/Login';
import Finance from './src/components/Finance';
import FinanceEditor from './src/components/FinanceEditor';
import AuthLoading from './src/components/AuthLoading';

const BurgerMenuIcon = styled(Icon)`
  padding-left: 20;
`;

const AddItemIcon = styled(Icon)`
  padding-right: 20;
`;

const defaultScreen = createStackNavigator(
  {
    Finance: { screen: Finance, navigationOptions: { headerTitle: 'Финансы' } },
    FinanceEditor: { screen: FinanceEditor, navigationOptions: { headerTitle: 'Редактировать' } },
  },
  {
    defaultNavigationOptions: ({
      navigation: {
        openDrawer,
        state: { routeName },
      },
    }) => {
      if (routeName === 'Finance')
        return {
          headerLeft: <BurgerMenuIcon onPress={() => openDrawer()} name="md-menu" size={30} />,
          headerRight: <AddItemIcon name="md-add-circle" size={30} />,
        };
    },
  }
);

const drawerNavigator = createDrawerNavigator({ defaultScreen });

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    Login,
    drawerNavigator,
  })
);
