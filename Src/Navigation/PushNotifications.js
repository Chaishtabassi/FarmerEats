import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log("Old FCM token", fcmToken);

  if (!fcmToken) {
    try {
      const newFcmToken = await messaging().getToken();
      if (newFcmToken) {
        console.log("New FCM:", newFcmToken);
        await AsyncStorage.setItem('fcmToken', newFcmToken);
      }
    } catch (error) {
      console.log('Error fetching FCM token:', error);
    }
  }
};

export const NotificationServices = () => {
  messaging().onMessage(async remoteMessage => {
    console.log('Notification in foreground:', remoteMessage);

    Alert.alert('New Notification', remoteMessage.notification.title);
    
    PushNotification.localNotification({
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
    });
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification opened from background state:', remoteMessage.notification);
  });

  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      console.log('Notification opened from quit state:', remoteMessage.notification);
    }
  });
};
