import React from 'react';
import { ScrollView } from 'react-native';
import Record from './Record';

export default () => (
  <ScrollView>
    <Record image={require('../images/n26_logo.png')} title="N26" subtitle="Daniels Sleifmanis" />
  </ScrollView>
);
