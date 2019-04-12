import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Record from './Record';
const DB = require('../fakeDB.json');

export default () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const allowScroll = scrollEnabled => setScrollEnabled(scrollEnabled);

  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      {Object.keys(DB).map((key, index) => (
        <Record record={DB[key]} key={key} light={index & 1} allowScroll={allowScroll} />
      ))}
    </ScrollView>
  );
};
