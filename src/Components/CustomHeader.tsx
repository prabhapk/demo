import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';


interface CountdownTimerProps {
    onLoginPress: () => void;
  onMenuPress: () => void;
}



const CustomHeader: React.FC<CountdownTimerProps> = ({
  onLoginPress,
  onMenuPress,
}) => {
 

  return  (
    <View
           style={styles.container}>
           <TouchableOpacity style={styles.menuContainer} onPress={() =>onMenuPress()}>
             <Entypo name="menu" size={30} color="#900" />
             <Text>Menu</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={onLoginPress}
             style={styles.loginButton}>
             <Text>Login</Text>
           </TouchableOpacity>
         </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row', alignItems: 'center'
},
  loginButton: {
    padding: 8,
    paddingHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default CustomHeader;
