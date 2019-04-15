import React, { useState, useEffect } from 'react';
import { Text, Dimensions, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import valid from 'card-validator';

import * as allCards from '../../images/creditCards';
import CardDetailsWrapper from './CardDetailsWrapper';

const { width } = Dimensions.get('window');

const Container = styled.View`
  background: white;
  width: ${width * 0.8};
  height: ${width * 0.5};
  border-radius: 10;
  background: #b4b1ff;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.25);
  margin: 30px 0;
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

const CardholdersName = styled.TextInput`
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

const CardDetails = styled(TextInputMask)`
  color: #6863d5;
  font-size: 16;
`;

export default ({ params }) => {
  const { bankName } = params;

  const [cardLogo, setCardLogo] = useState();
  const [cardholderName, setCardholderName] = useState(params.cardholderName);
  const [cardNumber, setCardNumber] = useState(params.cardNumber);
  const [date, setDate] = useState(params.date);
  const [secretCode, setSecretCode] = useState({
    name: params.secretCode.name,
    size: params.secretCode.size,
    code: params.secretCode.code,
  });
  const [cardPin, setCardPin] = useState(params.cardPin);

  useEffect(() => {
    checkCardNumberInfo(cardNumber);
  }, []);

  const checkCardNumberInfo = number => {
    if (!valid.number(number).isPotentiallyValid) return setCardLogo();

    const card = valid.number(number).card;
    if (!card) return setCardLogo();

    setSecretCode({ ...secretCode, name: card.code.name, size: card.code.size });

    const cardType = card.type;

    const Card = allCards[cardType === 'american-express' ? 'amex' : cardType === 'diners-club' ? 'diners' : cardType];

    if (!Card) return setCardLogo();

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
        <CardholdersName placeholder="Имя владельца карты" onChangeText={name => setCardholderName(name)}>
          {cardholderName}
        </CardholdersName>
      </CardTopContainer>
      <CardBottomContainer>
        <CardNumber
          placeholder="0000 0000 0000 0000"
          type={'credit-card'}
          value={cardNumber}
          onChangeText={number => {
            setCardNumber(number);
            checkCardNumberInfo(number);
          }}
        />
        <CardDetailsContainer>
          <CardDetailsWrapper title="valid thru">
            <CardDetails
              onChangeText={date => setDate(date)}
              type={'datetime'}
              placeholder="ММ/ГГ"
              options={{ format: 'MM/YY' }}
              value={date}
              keyboardType="numeric"
            />
          </CardDetailsWrapper>

          <CardDetailsWrapper title={secretCode.name} margin>
            <CardDetails
              onChangeText={code => setSecretCode({ ...secretCode, code })}
              type={'custom'}
              placeholder={'0'.repeat(secretCode.size)}
              options={{ mask: '9'.repeat(secretCode.size) }}
              value={secretCode.code}
              keyboardType="numeric"
            />
          </CardDetailsWrapper>

          <CardDetailsWrapper title="pin" margin>
            <CardDetails
              onChangeText={pin => setPin(pin)}
              type={'custom'}
              placeholder="0000"
              options={{ mask: '9999' }}
              value={cardPin}
              keyboardType="numeric"
            />
          </CardDetailsWrapper>
        </CardDetailsContainer>

        {cardLogo}
      </CardBottomContainer>
    </Container>
  );
};
