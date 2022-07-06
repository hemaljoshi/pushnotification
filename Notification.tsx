import React from 'react';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import {Platform, Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = () => {
  const getFcmToken = async () => {
    let fcmtokens: any = await AsyncStorage.getItem('deviceToken');
    console.log(fcmtokens, 'The old token');
    if (!fcmtokens) {
      try {
        const fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
          console.log('New token', fcmToken);
          await AsyncStorage.setItem('deviceToken', fcmToken);
        }
      } catch (error) {
        console.log('Error Occured at getFcmToken', error);
      }
    }
  };

  const requestPermissions = () => {
    firebase
      .messaging()
      .requestPermission()
      .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
        if (status === 1) {
          console.log('Authorized');
          onMessage();
        } else {
          console.log('Not authorized');
        }
      })
      .catch(e => console.log('Error occured at requestPermission: ', e));
  };

  const registerForRemoteMessages = () => {
    firebase
      .messaging()
      .registerDeviceForRemoteMessages()
      .then(() => {
        console.log('Registered');
        requestPermissions();
      })
      .catch(e =>
        console.log('Error occured at registerforRemoteMessages : ', e),
      );
  };

  const onMessage = () => {
    firebase.messaging().onMessage(response => {
      showLocalNotification(response.notification);
      let noti: any = response.notification;
      Alert.alert('Notification!', `${noti.title} ${'\n'}${noti.body}`, [
        // The "Yes" button
        {
          text: 'Ok',
          onPress: () => {
            //action
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        // {
        //   text: "No",
        // },
      ]);
    });
  };

  const showLocalNotification = async (notification: any) => {
    await PushNotification.localNotification({
      channelId: 'fcm_fallback_notification_channel',
      title: notification.title,
      messageId: notification.message,
      message: notification.message,
      bigText: notification.message,
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      autoCancel: true,
    });
  };
  getFcmToken();
  if (Platform.OS === 'ios') {
    registerForRemoteMessages();
  } else {
    onMessage();
  }
  return <></>;
};
export default Notification;
