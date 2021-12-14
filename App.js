import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase";

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

var firebaseConfig = {
  apiKey: "AIzaSyAgPb1PWhgodriuZ-f6atUG371OvCfRa_s",
  authDomain: "fir-219d1.firebaseapp.com",
  projectId: "fir-219d1",
  storageBucket: "fir-219d1.appspot.com",
  messagingSenderId: "576108716783",
  appId: "1:576108716783:web:55e811f708e7e6f1f6b11a",
  measurementId: "G-5V46KD18P5"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageScreen,
  Notification: NotificationScreen,
  Post: PostScreen,
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});


export default createAppContainer(
  createSwitchNavigator(
      {
          Loading: LoadingScreen,
          App: AppStack,
          Auth: AuthStack
      },
      {
          initialRouteName: "Loading"
      }
  )
);