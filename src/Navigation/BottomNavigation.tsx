import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View,} from 'react-native';
import Scale from '../Components/Scale';
import React from 'react';
import { tabScreens } from '../Constants/CommonFlatlist';
import { COLORS } from '../Constants/Theme';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: Scale(60),
        },
      }}>
     {tabScreens.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ width: Scale(80), marginTop: Scale(10), alignItems: 'center',}}>
                <Image
                  source={focused ? tab.focusedIcon : tab.unfocusedIcon}
                  style={{ width: Scale(20), height: Scale(20), marginTop: Scale(5) }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? '#fff' : 'grey',
                    marginTop: Scale(5),
                    marginBottom: Scale(10),textAlign:"center",
                    fontWeight:focused ? 'bold' : 'normal',
                  }}
                >
                  {tab.label}
                </Text>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
