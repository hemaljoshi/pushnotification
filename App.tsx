/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import Notification from './Notification';
import Container from './src/UIComponents/Container';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyD5nwnu3HwWSXwuKCZHSP1ybEXbRPFli7A',
      authDomain: 'push-notification-cbd1d.firebaseapp.com',
      databaseURL: 'https://push-notification-cbd1d.firebaseio.com',
      projectId: 'push-notification-cbd1d',
      storageBucket: 'push-notification-cbd1d.appspot.com',
      messagingSenderId: '106638900062',
      appId: '1:106638900062:android:2e107d3af5c868e396adcf',
      //measurementId: "G-P9BT0DVZYV"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    Notification();
  }, []);

  return (
    <Container>
      <Text>App</Text>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({});
