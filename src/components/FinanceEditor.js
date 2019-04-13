import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import CreditCard from './CreditCard';

const Container = styled.ScrollView`
  flex: 1;
  background: #6765a2;
`;

export default withNavigation(({ navigation: { getParam } }) => {
  const params = getParam('record');
  const {
    cardholderName,
    cardNumber,
    date,
    cvv,
    bankName,
    bankWebPage,
    userName,
    password,
    IBAN,
    BIC,
    sortingNumber,
    address,
  } = params;

  return (
    <Container>
      <CreditCard params={params} />

      {!!cardholderName && <Text>Имя: {cardholderName}</Text>}
      {!!cardNumber && <Text>Номер карты: {cardNumber}</Text>}
      {!!date && <Text>Срок годности: {date}</Text>}
      {!!cvv && <Text>CVV: {cvv}</Text>}
      {!!bankName && <Text>Название банка: {bankName}</Text>}
      {!!bankWebPage && <Text>Сайт банка: {bankWebPage}</Text>}
      {!!userName && <Text>Имя пользователя: {userName}</Text>}
      {!!password && <Text>Пароль: {password}</Text>}
      {!!IBAN && <Text>IBAN: {IBAN}</Text>}
      {!!BIC && <Text>BIC: {BIC}</Text>}
      {!!sortingNumber && <Text>Сортировачный номер: {sortingNumber}</Text>}
      {!!address && <Text>Адрес: {address}</Text>}
    </Container>
  );
});
