import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const RecordWrapper = styled.View`
  background: ${({ light }) => (light ? '#C9C8FD' : '#bebcff')};
  height: 70;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RecordImageContainer = styled.View`
  margin: 0 10px;
  height: 50;
  width: 50;
  background: white;
  border-radius: 10;
  justify-content: center;
  align-items: center;
`;

const RecordImage = styled.Image`
  height: 30;
  width: 30;
`;

const NoImage = styled.Text`
  font-size: 35;
  font-weight: 200;
  text-transform: uppercase;
`;

const RecordTitle = styled.Text`
  font-size: 20;
  font-weight: 600;
`;
const RecordSubtitle = styled.Text`
  font-size: 16;
  font-weight: 100;
`;

const NextIcon = styled(Icon)`
  padding-right: 27;
  color: #8b86ff;
`;

export default ({ image, title, subtitle, light }) => (
  <RecordWrapper light={light}>
    <RecordImageContainer>
      {image ? <RecordImage source={image} resizeMode="contain" /> : <NoImage>{title.slice(0, 1)}</NoImage>}
    </RecordImageContainer>

    <View style={{ flex: 1 }}>
      <RecordTitle>{title}</RecordTitle>
      <RecordSubtitle>{subtitle}</RecordSubtitle>
    </View>
    <NextIcon name="ios-arrow-forward" size={20} />
  </RecordWrapper>
);
