import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Settings from '../Screens/Settings';
import {Text, View,} from 'react-native';
import Scale from '../Components/Scale';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Profile from '../Screens/Profile';
import React from 'react';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'white',
          height: Scale(50),
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <View
              style={{
                width: Scale(80),
                // alignItems: 'center',
                marginTop: Scale(5),
              }}>
              <Entypo
                name={'home'}
                size={Scale(18)}
                color={focused ? '#7C00EC' : 'grey'}
                style={{marginLeft: Scale(10), marginTop: Scale(5)}}
              />
              <Text
                style={{
                  color: focused ? '#7C00EC' : 'grey',
                  marginTop: Scale(5),
                  marginBottom: Scale(10),
                }}>
                Home
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <View
              style={{
                width: Scale(80),
                marginTop: Scale(5),
              }}>
              <EvilIcons
                name={'user'}
                size={Scale(20)}
                color={focused ? '#7C00EC' : 'grey'}
                style={{marginLeft: Scale(10), marginTop: Scale(5)}}
              />
              <Text
                style={{
                  color: focused ? '#7C00EC' : 'grey',
                  marginTop: Scale(5),
                }}>
                Profile
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
