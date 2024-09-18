import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDeviceToken } from '../API/pushNotification';

const base_url = 'https://sowlab.com/assignment/';

export const isValidToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) {
      console.log('Token not found');
      return false;
    }
    console.log('Token found:', token);
    return true;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};

const Login_Api = async (email, password) => {
    try {
      const deviceToken = await getDeviceToken();
  
      const requestBody = {
        email,
        password,
        role: 'farmer',
        device_token: deviceToken || '',
        type: 'email/facebook/google/apple',
        social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        redirect: 'follow',
      };
  
      const response = await fetch(`${base_url}user/login`, requestOptions);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Login Result:', result);
  
      if (result && result.success && result.token) {
        await AsyncStorage.setItem('authToken', result.token);
      } else {
        throw new Error('Invalid token received from server');
      }
  
      return result;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  };

export default Login_Api;
