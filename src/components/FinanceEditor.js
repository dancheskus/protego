import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import CreditCard from './CreditCard';

const ScrollView = styled.ScrollView`
  background: #6765a2;
`;

const Container = styled.View`
  align-items: center;
`;

export default withNavigation(({ navigation: { getParam } }) => {
  const params = getParam('record');
  const { bankName, bankWebPage, userName, password, IBAN, BIC, sortingNumber, address } = params;

  return (
    <ScrollView>
      <Container>
        <CreditCard params={params} />

        {!!bankName && <Text>Название банка: {bankName}</Text>}
        {!!bankWebPage && <Text>Сайт банка: {bankWebPage}</Text>}
        {!!userName && <Text>Имя пользователя: {userName}</Text>}
        {!!password && <Text>Пароль: {password}</Text>}
        {!!IBAN && <Text>IBAN: {IBAN}</Text>}
        {!!BIC && <Text>BIC: {BIC}</Text>}
        {!!sortingNumber && <Text>Сортировачный номер: {sortingNumber}</Text>}
        {!!address && <Text>Адрес: {address}</Text>}
      </Container>
    </ScrollView>
  );
});
