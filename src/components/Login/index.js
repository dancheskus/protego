import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, View } from 'react-native';

import ProtegoCircleLogo from '../common/ProtegoCircleLogo';
import DismissKeyboard from '../common/DismissKeyboard';
import LoginForm from './LoginForm';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #8b86ff;
`;

const LogoContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const FormContainer = styled.View`
  justify-content: center;
  flex-grow: 1;
`;

export default () => (
  <DismissKeyboard>
    <StatusBar barStyle="light-content" />

    <Container behavior="padding">
      <LogoContainer>
        <ProtegoCircleLogo />
      </LogoContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Container>
  </DismissKeyboard>
);
