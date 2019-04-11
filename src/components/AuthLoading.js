import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { authCheck } from './common/authHelper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

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
