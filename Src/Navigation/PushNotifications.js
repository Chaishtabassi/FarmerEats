import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

// Request user permissions for notifications
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

// Get and store FCM token
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

// Handle notification services
export const NotificationServices = () => {
  // Foreground Message Handling
  messaging().onMessage(async remoteMessage => {
    console.log('Notification in foreground:', remoteMessage);

    // Show an alert or system notification
    Alert.alert('New Notification', remoteMessage.notification.title);
    
    // Alternatively, use PushNotification to display a notification
    PushNotification.localNotification({
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
    });
  });

  // When a notification is tapped and the app is in the background
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification opened from background state:', remoteMessage.notification);
  });

  // When the app is opened from a killed state by a notification
  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      console.log('Notification opened from quit state:', remoteMessage.notification);
    }
  });
};
