import React, { useState } from 'react';
import { StatusBar, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import valid from 'card-validator';

import Record from './Record';
import DB from '../fakeDB';
import CreditCard from './CreditCard';

const Container = styled.ScrollView`
  background: #6765a2;
`;

var numberValidation = valid.number('4596542993001000');

export default () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const allowScroll = scrollEnabled => setScrollEnabled(scrollEnabled);

  if (!numberValidation.isPotentiallyValid) {
    console.warn('Wrong card number');
  }

  if (numberValidation.card) {
    console.log(numberValidation);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />

      <Container scrollEnabled={scrollEnabled}>
        <FlatList
          data={DB.sort((a, b) => a.bankName.localeCompare(b.bankName))}
          keyExtractor={item => item.cardNumber}
          renderItem={({ item, index }) => <Record record={item} light={index & 1} allowScroll={allowScroll} />}
        />

        <CreditCard />
      </Container>
    </>
  );
};
