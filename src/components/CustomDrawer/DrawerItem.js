import React from 'react';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

import { DrawerItem, DrawerItemText, DrawerItemIconWrapper, DrawerItemIcon } from './styles';

export default withNavigation(({ navigateTo, name, icon, navigation: { navigate, closeDrawer } }) => (
  <TouchableWithoutFeedback
    onPress={() => {
      navigate(navigateTo);
      closeDrawer();
    }}
  >
    <DrawerItem>
      <DrawerItemText>{name}</DrawerItemText>

      <DrawerItemIconWrapper>
        <DrawerItemIcon name={icon} size={18} />
      </DrawerItemIconWrapper>
    </DrawerItem>
  </TouchableWithoutFeedback>
));
