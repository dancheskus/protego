import React from 'react';
import { TouchableWithoutFeedback, Alert } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  withNavigation,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import { logout } from './src/components/common/authHelper';
import Login from './src/components/Login';
import Finance from './src/components/Finance';
import FinanceEditor from './src/components/FinanceEditor';
import AuthLoading from './src/components/AuthLoading';
import ProtegoCircleLogo from './src/components/common/ProtegoCircleLogo';

const BurgerMenuIcon = styled(Icon)`
  padding-left: 20;
`;

const AddItemIcon = styled(Icon)`
  padding-right: 20;
`;

const defaultScreen = createStackNavigator({
  Finance: {
    screen: Finance,
    navigationOptions: ({ navigation: { navigate, openDrawer } }) => ({
      headerTitle: 'Финансы',
      headerLeft: <BurgerMenuIcon onPress={() => openDrawer()} name="md-menu" size={30} />,
      headerRight: <AddItemIcon name="md-add-circle" size={30} />,
    }),
  },
  FinanceEditor: { screen: FinanceEditor, navigationOptions: { headerTitle: 'Редактировать' } },
});

const DrawerContainer = styled.SafeAreaView`
  flex: 1;
  background: #6863d5;
  align-items: center;
`;

const DrawerTopIcons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;

const DrawerTopIcon = styled(Icon)`
  color: #b4b1ff;
  margin-top: 15;
`;

const DrawerLogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40;
  transform: scale(1.3);
`;

const DrawerTitle = styled.Text`
  text-transform: uppercase;
  color: #d3d1ff;
  font-weight: bold;
  margin-bottom: 25;
  align-self: flex-start;
`;

const DrawerItemsContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 2;
  padding-bottom: 150px;
  width: 90%;
`;

const DrawerItem = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom-color: #b4b1ff;
  border-bottom-width: 2px;
  margin-bottom: 17;
`;
const DrawerItemText = styled.Text`
  color: #b4b1ff;
  font-size: 16;
  font-weight: bold;
`;
const DrawerItemIconWrapper = styled.View`
  width: 24;
  height: 24;
  border-radius: 12;
  background: #b4b1ff;
  align-items: center;
  justify-content: center;
`;
const DrawerItemIcon = styled(Icon)`
  color: #7f79ff;
`;

const CustomDrawerComponent = withNavigation(({ navigation: { navigate, closeDrawer } }) => (
  <DrawerContainer>
    <DrawerTopIcons>
      <DrawerTopIcon name="md-settings" size={30} />
      <DrawerTopIcon
        name="md-exit"
        size={30}
        onPress={() => {
          Alert.alert('Выход', 'Вы хотите выйти из аккаунта?', [
            { text: 'Да', onPress: () => logout(navigate) },
            { text: 'Нет', style: 'cancel' },
          ]);
        }}
      />
    </DrawerTopIcons>

    <DrawerLogoContainer>
      <ProtegoCircleLogo />
    </DrawerLogoContainer>

    <DrawerItemsContainer>
      <DrawerTitle>Категории</DrawerTitle>

      <TouchableWithoutFeedback
        onPress={() => {
          navigate('Finance');
          closeDrawer();
        }}
      >
        <DrawerItem>
          <DrawerItemText>Финансы</DrawerItemText>

          <DrawerItemIconWrapper>
            <DrawerItemIcon name="md-card" size={18} />
          </DrawerItemIconWrapper>
        </DrawerItem>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <DrawerItem>
          <DrawerItemText>Сайты</DrawerItemText>

          <DrawerItemIconWrapper>
            <DrawerItemIcon name="ios-globe" size={18} />
          </DrawerItemIconWrapper>
        </DrawerItem>
      </TouchableWithoutFeedback>

      <DrawerItem>
        <DrawerItemText>Заметки</DrawerItemText>

        <DrawerItemIconWrapper>
          <DrawerItemIcon name="ios-paper" size={18} />
        </DrawerItemIconWrapper>
      </DrawerItem>
    </DrawerItemsContainer>
  </DrawerContainer>
));

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
