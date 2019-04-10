import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
const circleSize = Dimensions.get('window').width / 2.4;

const Circle = styled.View`
  background-color: #b4b1ff;
  width: ${circleSize};
  height: ${circleSize};
  border-radius: ${circleSize / 2};
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  height: 90;
  width: 90;
`;
const Title = styled.Text`
  color: white;
  font-size: 20;
  font-weight: 300;
`;

export default () => (
  <Circle>
    <Image source={require('../../images/secure.png')} />
    <Title>Protego!</Title>
  </Circle>
);
