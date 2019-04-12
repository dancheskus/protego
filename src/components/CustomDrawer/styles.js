import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const DrawerContainer = styled.SafeAreaView`
  flex: 1;
  background: #6863d5;
  align-items: center;
`;

export const DrawerTopIcons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;

export const DrawerTopIcon = styled(Icon)`
  color: #b4b1ff;
  margin-top: 15;
`;

export const DrawerLogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 40;
  transform: scale(1.3);
`;

export const DrawerTitle = styled.Text`
  text-transform: uppercase;
  color: #d3d1ff;
  font-weight: bold;
  margin-bottom: 25;
  align-self: flex-start;
`;

export const DrawerItemsContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 2;
  padding-bottom: 150px;
  width: 90%;
`;

export const DrawerItem = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom-color: #b4b1ff;
  border-bottom-width: 2px;
  margin-bottom: 17;
`;
export const DrawerItemText = styled.Text`
  color: #b4b1ff;
  font-size: 16;
  font-weight: bold;
`;
export const DrawerItemIconWrapper = styled.View`
  width: 24;
  height: 24;
  border-radius: 12;
  background: #b4b1ff;
  align-items: center;
  justify-content: center;
`;
export const DrawerItemIcon = styled(Icon)`
  color: #7f79ff;
`;
