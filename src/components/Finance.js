import React from 'react';
import { ScrollView } from 'react-native';
import Record from './Record';

export default () => (
  <ScrollView>
    <Record image={require('../images/n26_logo.png')} title="N26" subtitle="Daniels Sleifmanis" />
    <Record image={require('../images/n26_logo.png')} title="N26" subtitle="Viktors Sleifmanis" light />
    <Record title="BlueOrange" subtitle="Daniels Sleifmanis" />
  </ScrollView>
);
