import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Stacknavigation from './Src/Navigation/Stacknavigation';
import 'react-native-gesture-handler';
import { NotificationServices, requestUserPermission } from './Src/Navigation/PushNotifications';
import Toast from 'react-native-toast-message';

const App = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);

  return (
    <View style={styles.container}>
      <Stacknavigation />
      <Toast />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
