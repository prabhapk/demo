import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { applogo, splashScreen } from '../../assets/assets';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ThreeDigitMain');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <Image source={splashScreen} style={styles.logoImg}/>
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
    // resizeMode:"contain",
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  }

});

export default SplashScreen;
