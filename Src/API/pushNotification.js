import messaging from '@react-native-firebase/messaging';

export const getDeviceToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Device Token:', token);
    return token;
  } catch (error) {
    console.error('Error getting device token:', error);
    return null;
  }
};
