import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
        </Drawer.Navigator>
      );
}

export default DrawerNavigation


