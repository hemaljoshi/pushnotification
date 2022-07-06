import {StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import Notification from './Notification';
import Container from './src/UIComponents/Container';

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
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    Notification();
  }, []);

  return (
    <Container style={styles.containerStyle}>
      <Text>PushNotification</Text>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStyle: {justifyContent: 'flex-start', alignItems: 'flex-start'},
  appBarContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBarContent: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  appBarItem: {
    margin: 10,
  },
  appbarTitle: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    color: '#1A0217',
  },
  storyViewParent: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyScrollView: {
    height: '100%',
  },
  storyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addStory: {
    marginHorizontal: 10,
    marginVertical: 3,
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e42c67',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 18,
  },
  story: {
    marginHorizontal: 6,
    marginVertical: 3,
    height: 65,
    width: 65,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 18,
  },
  storyActive: {borderColor: '#1a70ea'},
  visitedStoryText: {
    color: '#BCBCBC',
  },
  addStoryImg: {height: 35, width: 35},
  storyImg: {height: 56, width: 56, borderRadius: 50},
  storyText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '700',
    color: '#1A0217',
  },
  postViewParent: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postScrollView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  postScrollViewContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  postContainer: {
    margin: 15,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 18,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 18,
  },
  postImg: {
    height: '100%',
    width: '100%',
    borderRadius: 18,
  },
  postTitleText: {
    flex: 1,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    color: '#bcbcbc',
    fontSize: 13,
    fontWeight: '900',
  },
  postActionComment: {
    marginVertical: 5,
    color: '#bcbcbc',
    fontSize: 10,
    fontWeight: '900',
  },
  postActionImages: {
    flexDirection: 'row',
  },
  postCommentView: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  postCommentImg: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  tabBarParent: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, alpha)',
  },
  tabBarChild: {
    paddingHorizontal: 40,
    height: 60,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBarProfileView: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  tabBarImg: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  tabBarButtonView: {
    // borderWidth: 1,
    position: 'absolute',
    height: 85,
    alignItems: 'center',
  },
  tabBarButton: {
    height: 50,
    width: 50,
    backgroundColor: '#e42c67',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarBtnText: {
    fontSize: 30,
    color: '#fff',
  },
});
