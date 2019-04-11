import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Record from './Record';

export default () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const allowScroll = scrollEnabled => setScrollEnabled(scrollEnabled);

  return (
    <ScrollView scrollEnabled={scrollEnabled}>
      <Record
        image={require('../images/n26_logo.png')}
        title="N26"
        subtitle="Daniels Sleifmanis"
        allowScroll={allowScroll}
      />
      <Record
        image={require('../images/n26_logo.png')}
        title="N26"
        subtitle="Viktors Sleifmanis"
        light
        allowScroll={allowScroll}
      />
      <Record title="BlueOrange" subtitle="Daniels Sleifmanis" allowScroll={allowScroll} />
    </ScrollView>
  );
};
