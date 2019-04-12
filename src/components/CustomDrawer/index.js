import React from 'react';
import { Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

import { logout } from '../common/authHelper';
import ProtegoCircleLogo from '../common/ProtegoCircleLogo';
import {
  DrawerContainer,
  DrawerTopIcons,
  DrawerTopIcon,
  DrawerLogoContainer,
  DrawerTitle,
  DrawerItemsContainer,
} from './styles';
import DrawerItemComponent from './DrawerItem';

export default withNavigation(({ navigation: { navigate } }) => (
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

      <DrawerItemComponent navigateTo="Finance" name="Финансы" icon="md-card" />
      <DrawerItemComponent navigateTo="Finance" name="Сайты" icon="ios-globe" />
      <DrawerItemComponent navigateTo="Finance" name="Заметки" icon="ios-paper" />
    </DrawerItemsContainer>
  </DrawerContainer>
));
