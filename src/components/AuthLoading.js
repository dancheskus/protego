import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const authCheck = async navigate => {
  try {
    const value = await AsyncStorage.getItem('loggedIn');
    if (value === 'true') return navigate('MainScreen');
    navigate('Login');
  } catch (e) {
    console.warn(e);
  }
};

export default ({ navigation: { navigate } }) => {
  useEffect(() => {
    authCheck(navigate);
  }, []);

  return (
    <Container>
      <Text>LOADING...</Text>
    </Container>
  );
};
