import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SplashScreen'} screenOptions={{headerShown: false}}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
