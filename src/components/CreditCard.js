import React from 'react';
import { Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';

const { width } = Dimensions.get('window');

const Container = styled.View`
  background: white;
  width: ${width * 0.8};
  height: ${width * 0.5};
  border-radius: 10;
  background: #b4b1ff;
`;

const CardTopContainer = styled.View`
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  flex: 1;
`;
const CardBottomContainer = styled.View`
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  flex: 1;
`;
const BankName = styled.Text`
  align-self: flex-end;
  font-size: 25;
  margin: 10px 10px 0 0;
  color: #6863d5;
  opacity: 0.7;
`;
const CardNumber = styled(TextInputMask)`
  color: #6863d5;
  font-size: 20;
  font-weight: 500;
  width: 68%;
  align-self: center;
`;
const CardValidWrapper = styled.View``;
const CardCVVWrapper = styled.View``;
const CardProviderLogo = styled.Image``;

export default () => (
  <Container>
    <CardTopContainer>
      <BankName>BlueOrange</BankName>
    </CardTopContainer>
    <CardBottomContainer>
      <CardNumber
        onChangeText={(formatted, extracted) => {
          console.log(formatted);
          console.log(extracted);
        }}
        mask={'[0000] [0000] [0000] [0000]'}
      >
        1234123412341234
      </CardNumber>
    </CardBottomContainer>
  </Container>
);
