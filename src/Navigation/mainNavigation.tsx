import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import BottomNavigation from './BottomNavigation';
import ThreeDigitMain from '../Screens/ThreeDigitMain';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
