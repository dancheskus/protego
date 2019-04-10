import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export default ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{ flex: 1 }}>{children}</View>
  </TouchableWithoutFeedback>
);
