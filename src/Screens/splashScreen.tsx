import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { applogo } from '../../assets/assets';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('BottomNavigation');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Image source={applogo} style={styles.logoImg}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoImg:{
    resizeMode:"contain",
    width: 200,
    height: 200
  }

});

export default SplashScreen;
