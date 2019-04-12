import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import Login from './src/components/Login';
import Finance from './src/components/Finance';
import FinanceEditor from './src/components/FinanceEditor';
import AuthLoading from './src/components/AuthLoading';
import CustomDrawerComponent from './src/components/CustomDrawer';

const BurgerMenuIcon = styled(Icon)`
  padding-left: 20;
  color: #c2c0fd;
`;

const AddItemIcon = styled(Icon)`
  padding-right: 20;
  color: #c2c0fd;
`;

const defaultScreen = createStackNavigator(
  {
    Finance: {
      screen: Finance,
      navigationOptions: ({ navigation: { openDrawer } }) => ({
        headerTitle: 'Финансы',
        headerLeft: <BurgerMenuIcon onPress={() => openDrawer()} name="md-menu" size={30} />,
        headerRight: <AddItemIcon name="md-add-circle" size={30} />,
      }),
    },
    FinanceEditor: { screen: FinanceEditor, navigationOptions: { headerTitle: 'Редактировать' } },
  },
  { defaultNavigationOptions: { headerStyle: { backgroundColor: '#8B86FF' }, headerTintColor: '#C2C0FD' } }
);

const drawerNavigator = createDrawerNavigator(
  {
    defaultScreen,
  },
  {
    contentComponent: CustomDrawerComponent,
  }
);

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading,
    Login,
    drawerNavigator,
  })
);
