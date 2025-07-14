
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Scale from '../Components/Scale';
import CommonTextInput from '../Components/CommonTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {
    lefArrow,
  loginImageBackground,
  signInLogo,
} from '../../assets/assets';

const ForgotPassword = ({navigation}: any) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
  
    const handleGetOtp = () => {
      console.log('GET OTP triggered');
    };

    const handleSignIn = () => {
      console.log('Sign In clicked');
    };
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{ paddingBottom: Scale(30) }}>
          {/* <Image source={loginImageBackground} style={styles.topImage} /> */}
          <ImageBackground source={loginImageBackground} style={styles.topImage}>
              <TouchableOpacity
              onPress={() => navigation.goBack()}
              >
                <Image source={lefArrow} style={styles.leftArrow} resizeMode="contain" />
              </TouchableOpacity>
            </ImageBackground>
          <View style={styles.bottomContainer}>
            <View style={styles.logoHeader}>
              <Image source={signInLogo} style={styles.logo} resizeMode="contain" />
              <Text style={styles.headerText}>Set password</Text>
            </View>

            {/* Inputs */}
            <View style={styles.inputWrapper}>
              <CommonTextInput
                placeholderText="Enter Mobile number"
                value={mobileNumber}
                keyboardType="phone-pad"
                onChange={setMobileNumber}
                isDisabled={false}
                secureTextEntry={false}
                leftIcon={<Ionicons name="call-outline" size={Scale(18)} color="#999" />}
              />
                <View style={styles.inputSpacing}>
                  <CommonTextInput
                    placeholderText="Enter OTP"
                    value={otp}
                    onChange={setOtp}
                    isDisabled={false}
                    secureTextEntry={false}
                    keyboardType="numeric"
                    leftIcon={<Ionicons name="keypad-outline" size={Scale(18)} color="#999" />}
                    rightButton={
                      <TouchableOpacity onPress={handleGetOtp}>
                        <Text style={styles.getOtpText}>GET OTP</Text>
                      </TouchableOpacity>
                    }
                  />
                </View>
                <View style={styles.inputSpacing}>
                <CommonTextInput
                placeholderText="New Password"
                value={password}
                keyboardType="default"
                onChange={setPassword}
                isDisabled={false}
                secureTextEntry={false}
                leftIcon={<Entypo name="dial-pad" size={Scale(18)} color="#999" />}
              />
                </View>

            </View>

  
            {/* Login Button */}
            <TouchableOpacity onPress={handleSignIn} style={styles.buttonWrapper}>
              <LinearGradient
                colors={['#FF4140', '#FFAD45']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.signInButton}
              >
                <Text style={styles.signInButtonText}>Confirm</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#360400',
    },
    topImage: {
      width: '100%',
      height: Scale(260),
    },
    bottomContainer: {
      backgroundColor: '#360400',
      borderTopRightRadius: Scale(80),
      marginTop: -Scale(70),
      paddingBottom: Scale(30),
    },
    logoHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: Scale(20),
      marginTop: Scale(30),
    },
    logo: {
      width: Scale(40),
      height: Scale(40),
    },
    headerText: {
      fontSize: Scale(36),
      fontWeight: 'bold',
      color: 'white',
      marginLeft: Scale(10),
    },
    tabContainer: {
      flexDirection: 'row',
      backgroundColor: '#2e0b0b',
      borderRadius: 999,
      marginHorizontal: Scale(20),
      marginTop: Scale(40),
      padding: Scale(4),
      borderWidth: 1,
      borderColor: '#ff5f5f',
    },
    tab: {
      flex: 1,
      paddingVertical: Scale(12),
      borderRadius: Scale(25),
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: '#fff',
      borderColor: '#ff5f5f',
      borderWidth: 1,
    },
    tabText: {
      fontSize: Scale(16),
      fontWeight: 'bold',
    },
    activeText: {
      color: '#ff5f5f',
    },
    inactiveText: {
      color: '#ff5f5f',
      opacity: 0.6,
    },
    inputWrapper: {
      marginHorizontal: Scale(20),
      marginTop: Scale(30),
    },
    inputSpacing: {
      marginTop: Scale(10),
    },
    forgotPassword: {
      // marginTop: Scale(10),
      alignItems: 'center',
    },
    forgotPasswordText: {
      color: '#FFAD45',
      fontSize: Scale(16),
      fontWeight: 'bold',
    },
    buttonWrapper: {
      marginTop: Scale(30),
      marginHorizontal: Scale(20),
    },
    buttonWrapperRegister: {
      marginTop: Scale(30),
      marginHorizontal: Scale(20),
      paddingVertical: Scale(14),
      borderRadius: Scale(25),
      alignItems: 'center',
      borderColor: '#FFAD45',
      borderWidth: 1,
    },
  
    signInButton: {
      paddingVertical: Scale(14),
      borderRadius: Scale(25),
      alignItems: 'center',
    },
    signInButtonText: {
      color: '#fff',
      fontSize: Scale(16),
      fontWeight: 'bold',
    },
    registerText: {
      color: '#fff',
      fontSize: Scale(16),
      fontWeight: 'bold',
    },
    getOtpText: {
      color: '#ff5f5f',
      fontWeight: 'bold',
      marginLeft: Scale(10),
      marginHorizontal: Scale(10),
    },
    signInCustomerLogoStyle: {
      width: Scale(80),
      height: Scale(80),
    },
    leftArrow: {
        width: Scale(24),
        height: Scale(24),
        marginTop: Scale(20),
        marginLeft: Scale(10),
    },
    customerViewLogo: {
      alignItems: 'center', 
      marginTop: Scale(30)}
  });
  