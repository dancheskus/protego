import React from 'react';
import { Text, Dimensions, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

import Jcb from '../images/creditCards/jcb.svg';
import Maestro from '../images/creditCards/maestro.svg';
import Mastercard from '../images/creditCards/mastercard.svg';
import Unionpay from '../images/creditCards/unionpay.svg';
import Verve from '../images/creditCards/verve.svg';
import Visa from '../images/creditCards/visa.svg';
import Amex from '../images/creditCards/amex.svg';
import Discover from '../images/creditCards/discover.svg';
import Diners from '../images/creditCards/diners.svg';
import Hipercard from '../images/creditCards/hipercard.svg';
import Elo from '../images/creditCards/elo.svg';

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

export default ({ params }) => {
  const { cardholderName, cardNumber, date, cvv, cardPin, bankName } = params;

  const getCardLogo = number => {
    const styles = StyleSheet.create({ cardStyle: { opacity: 0.7, position: 'absolute', bottom: 10, right: 10 } });
    if (!valid.number(number).isPotentiallyValid) return;

    switch (valid.number(number).card.type) {
      case 'visa':
        return <Visa style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'unionpay':
        return <Unionpay style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'verve':
        return <Verve style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'mastercard':
        return <Mastercard style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'maestro':
        return <Maestro style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'jcb':
        return <Jcb style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'american-express':
        return <Amex style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'discover':
        return <Discover style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'diners-club':
        return <Diners style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'hipercard':
        return <Hipercard style={styles.cardStyle} width={50} height={30} color="#6863d5" />;
      case 'elo':
        return <Elo style={styles.cardStyle} width={50} height={30} color="#6863d5" />;

      default:
        break;
    }
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

        {getCardLogo(cardNumber)}
      </CardBottomContainer>
    </Container>
  );
};
