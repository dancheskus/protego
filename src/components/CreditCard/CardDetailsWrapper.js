import React, { useState, useEffect } from 'react';
import { Text, Dimensions, View, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

const CardDetailsLabel = styled(Text)`
  color: #6863d5;
  opacity: 0.7;
  font-size: 11;
  text-transform: uppercase;
`;

export default ({ children, title, margin }) => (
  <View style={{ marginLeft: margin && 25 }}>
    <CardDetailsLabel>{title}</CardDetailsLabel>
    {children}
  </View>
);
