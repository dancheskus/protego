import React from 'react';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

const Container = styled.View`
  padding: 20px;
  align-items: center;
`;

const textStyle = `
  font-weight: 200;
  font-size: 20px;
  color: white;
`;

const visualStyle = `
  border-radius: 10px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 10;
  padding-left: 20px;

  ${textStyle}
  ${visualStyle}
`;

const LoginButton = styled.TouchableOpacity`
  width: 30%;
  background: #c2c0fd;
  justify-content: center;

  ${visualStyle}
`;

const LoginButtonText = styled.Text`
  text-transform: uppercase;
  text-align: center;
  padding: 13px;

  ${textStyle}
`;

const RegisterButton = styled.TouchableOpacity`
  margin-top: 5;
`;

const RegisterButtonText = styled.Text`
  color: white;
`;

export default withNavigation(({ navigation: { navigate } }) => {
  const loginClicked = async () => {
    try {
      await AsyncStorage.setItem('loggedIn', 'true');
      navigate('MainScreen');
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Container>
      <Input
        placeholder="EMAIL"
        returnKeyType="next"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        onSubmitEditing={() => passwordInput.focus()}
        blurOnSubmit={false}
      />

      <Input
        placeholder="PASSWORD"
        secureTextEntry
        returnKeyType="go"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        ref={input => (passwordInput = input)}
      />

      <LoginButton onPress={loginClicked}>
        <LoginButtonText>Log In</LoginButtonText>
      </LoginButton>

      <RegisterButton>
        <RegisterButtonText>Register</RegisterButtonText>
      </RegisterButton>
    </Container>
  );
});
