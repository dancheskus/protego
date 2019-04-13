import React from 'react';
import { Text, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import Visa from '../images/creditCards/visa.svg';
import valid from 'card-validator';

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
  justify-content: space-around;
`;
const CardBottomContainer = styled.View`
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  flex: 1;
`;
const BankName = styled.Text`
  align-self: flex-end;
  font-size: 25;
  margin: 0 10px 0 0;
  color: #6863d5;
  opacity: 0.7;
`;

const CardholdersName = styled.Text`
  color: #6863d5;
  font-size: 17;
  align-self: center;
`;
const CardNumber = styled(TextInputMask)`
  color: #6863d5;
  font-size: 20;
  font-weight: 500;
  text-align: center;
`;
const CardDetailsContainer = styled.View`
  flex-direction: row;
  margin: 15px 0 0 20px;
`;

const CardDetailsLabel = styled(Text)`
  color: #6863d5;
  opacity: 0.7;
  font-size: 11;
`;
const CardDetails = styled(TextInputMask)`
  color: #6863d5;
  font-size: 16;
`;
const CardProviderLogo = styled(Visa)`
  /* border: 1px solid black; */
  opacity: 0.7;
  position: absolute;
  bottom: 10;
  right: 10;
`;

export default () => (
  <Container>
    <CardTopContainer>
      <BankName>BlueOrange</BankName>
      <CardholdersName>Jack Nicholson</CardholdersName>
    </CardTopContainer>
    <CardBottomContainer>
      <CardNumber placeholder="0000 0000 0000 0000" type={'credit-card'} value={'4657386756486734'} />
      <CardDetailsContainer>
        <View>
          <CardDetailsLabel>VALID THRU</CardDetailsLabel>
          <CardDetails type={'datetime'} placeholder="01/19" options={{ format: 'MM/YY' }} value={'0423'} />
        </View>

        <View style={{ marginLeft: 30 }}>
          <CardDetailsLabel>CVV</CardDetailsLabel>
          <CardDetails type={'custom'} placeholder="000" options={{ mask: '999' }} value={'123'} />
        </View>
      </CardDetailsContainer>
      <CardProviderLogo width={'50'} height={30} color="#6863d5" />

      {console.log(valid.number('4596542993001000').card.type)}
    </CardBottomContainer>
  </Container>
);
