import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default withNavigation(({ navigation: { getParam } }) => {
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
  } = getParam('record');

  return (
    <Container>
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
