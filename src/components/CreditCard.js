import React, { useState, useEffect } from 'react';
import { Text, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import valid from 'card-validator';

import * as allCards from '../images/creditCards';

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

export default ({ params }) => {
  const { cardholderName, cardNumber, date, cvv, cardPin, bankName } = params;

  const [cardLogo, setCardLogo] = useState();
  useEffect(() => {
    getCardLogo(cardNumber);
  }, []);

  const getCardLogo = async number => {
    if (!valid.number(number).isPotentiallyValid) return;

    const Card = allCards[valid.number(number).card.type];

    if (!Card) return;

    setCardLogo(
      <Card
        style={{ opacity: 0.7, position: 'absolute', bottom: 10, right: 10 }}
        width="50"
        height="30"
        color="#6863d5"
      />
    );
  };

  return (
    <Container>
      <CardTopContainer>
        <BankName>{bankName}</BankName>
        <CardholdersName>{cardholderName}</CardholdersName>
      </CardTopContainer>
      <CardBottomContainer>
        <CardNumber placeholder="0000 0000 0000 0000" type={'credit-card'} value={cardNumber} />
        <CardDetailsContainer>
          <View>
            <CardDetailsLabel>VALID THRU</CardDetailsLabel>
            <CardDetails type={'datetime'} placeholder="01/19" options={{ format: 'MM/YY' }} value={date} />
          </View>

          <View style={{ marginLeft: 25 }}>
            <CardDetailsLabel>CVV</CardDetailsLabel>
            <CardDetails type={'custom'} placeholder="000" options={{ mask: '999' }} value={cvv} />
          </View>

          <View style={{ marginLeft: 25 }}>
            <CardDetailsLabel>PIN</CardDetailsLabel>
            <CardDetails type={'custom'} placeholder="0000" options={{ mask: '9999' }} value={cardPin} />
          </View>
        </CardDetailsContainer>

        {cardLogo}
      </CardBottomContainer>
    </Container>
  );
};
