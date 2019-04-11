import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const RecordWrapper = styled.View`
  background: #bebcff;
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

const RecordTitle = styled.Text`
  font-size: 20;
  font-weight: 600;
`;
const RecordSubtitle = styled.Text`
  font-size: 16;
  font-weight: 100;
`;

const NextIcon = styled(Icon)`
  padding-right: 15;
`;

export default ({ image, title, subtitle }) => (
  <RecordWrapper>
    <RecordImageContainer>
      <RecordImage source={image} resizeMode="contain" />
    </RecordImageContainer>

    <View style={{ flex: 1 }}>
      <RecordTitle>{title}</RecordTitle>
      <RecordSubtitle>{subtitle}</RecordSubtitle>
    </View>
    <NextIcon name="ios-arrow-forward" size={25} />
  </RecordWrapper>
);
