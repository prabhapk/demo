import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/splashScreen';
import Login from '../Screens/Login';
import BottomNavigation from './BottomNavigation';
import ThreeDigitMain from '../Screens/ThreeDigitMain';
import Profile from '../Screens/Profile';
import SignUpScreen from '../Screens/SignUpScreen';
import SignInScreen from '../Screens/SignInScreen';
import UserDetails from '../Screens/UserDetails';
import PasswordChange from '../Screens/PasswordChange';
import DummyScreen from '../Screens/DummyScreen';
import LotteryScreen from '../Screens/Lottery/LotteryScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import SignUpSetPassword from '../Screens/SignUpSetPassword';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'BottomNavigation'} screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
         <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
        />
        <Stack.Screen
          name="ThreeDigitMain"
          component={ThreeDigitMain}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
        />
        <Stack.Screen
          name="PasswordChange"
          component={PasswordChange}
        />
        <Stack.Screen
          name="DummyScreen"
          component={DummyScreen}
        />
        <Stack.Screen
          name="LotteryScreen"
          component={LotteryScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="SignUpSetPassword"
          component={SignUpSetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
