import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import Record from './Record';
const DB = require('../fakeDB.json');

const Container = styled.ScrollView`
  background: #6765a2;
`;

export default () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const allowScroll = scrollEnabled => setScrollEnabled(scrollEnabled);

  return (
    <>
      <StatusBar barStyle="light-content" />

      <Container scrollEnabled={scrollEnabled}>
        {Object.keys(DB).map((key, index) => (
          <Record record={DB[key]} key={key} light={index & 1} allowScroll={allowScroll} />
        ))}
      </Container>
    </>
  );
};
