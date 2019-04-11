import AsyncStorage from '@react-native-community/async-storage';

export const authCheck = async navigate => {
  try {
    const value = await AsyncStorage.getItem('loggedIn');
    if (value === 'true') return navigate('drawerNavigator');
    navigate('Login');
  } catch (e) {
    console.warn(e);
  }
};

export const login = async navigate => {
  try {
    await AsyncStorage.setItem('loggedIn', 'true');
    navigate('drawerNavigator');
  } catch (e) {
    console.warn(e);
  }
};

export const logout = async navigate => {
  try {
    await AsyncStorage.removeItem('loggedIn');
    navigate('Login');
  } catch (e) {
    console.warn(e);
  }
};
