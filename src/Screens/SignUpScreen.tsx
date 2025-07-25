import React, {useState} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import {
  lefArrow,
  loginImageBackground,
  referral,
  signInCustomerLogo,
  signInLogo,
} from '../../assets/assets';

const SignUpScreen = ({navigation}: any) => {
  const [mobileNumber, setMobileNumber] = useState('');
  // const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleGetOtp = () => {
    console.log('GET OTP triggered');
  };

  const handleSignIn = () => {
    console.log('Sign In clicked');
  };
  const [isEighteenPlus, setIsEighteenPlus] = useState(false);
  const [isNotify, setIsNotify] = useState(false);


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{paddingBottom: Scale(30)}}>
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
            <Image
              source={signInLogo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.headerText}>Sign up</Text>
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
              leftIcon={
                <Ionicons name="call-outline" size={Scale(18)} color="#999" />
              }
            />

            <View style={styles.inputSpacing}>
              <CommonTextInput
                placeholderText="Enter OTP"
                value={otp}
                onChange={setOtp}
                isDisabled={false}
                secureTextEntry={false}
                keyboardType="numeric"
                leftIcon={
                  <Ionicons
                    name="keypad-outline"
                    size={Scale(18)}
                    color="#999"
                  />
                }
                rightButton={
                  <TouchableOpacity onPress={handleGetOtp}>
                    <Text style={styles.getOtpText}>GET OTP</Text>
                  </TouchableOpacity>
                }
              />
            </View>
            <View style={styles.inputSpacing}>
              <CommonTextInput
                placeholderText="Referral Code"
                value={referralCode}
                onChange={setReferralCode}
                isDisabled={false}
                secureTextEntry ={false}
                leftIcon={
                  <Image source={referral} 
                  style={{width: Scale(18),
                     height: Scale(18)}} 
                     resizeMode='contain' 
                     tintColor={'#999'}
                     />
                }
              />
            </View>
          </View>
          <View style={{ marginHorizontal: Scale(10)}}>
          <TouchableOpacity
      style={styles.container}
      onPress={() => setIsEighteenPlus(prev => !prev)}>
      <View style={[styles.circle, isEighteenPlus && styles.checkedCircle]}>
        {isEighteenPlus && (
          <Ionicons name="checkmark" size={14} color="#fff" />
        )}
      </View>
      <Text style={styles.label}>I confirm I am 18+</Text>
    </TouchableOpacity>
          <TouchableOpacity
      style={styles.container}
      onPress={() => setIsNotify(prev => !prev)}>
      <View style={[styles.circle, isNotify && styles.checkedCircle]}>
        {isNotify && (
          <Ionicons name="checkmark" size={14} color="#fff" />
        )}
      </View>
      <Text style={styles.label}>Allow us to notify you important winning information through this mobile number</Text>
    </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity onPress={
            () => navigation.navigate('SignUpSetPassword')
          } style={styles.buttonWrapper}>
            <LinearGradient
              colors={['#FF4140', '#FFAD45']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.signInButton}>
              <Text style={styles.signInButtonText}>NEXT</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style ={styles.accountTextView}>
            <Text style ={styles.accountText}>
              Already have an account? {''}
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
              <Text style={styles.siginText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
  customerViewLogo: {
    alignItems: 'center',
    marginTop: Scale(30),
  },
  siginText:{
    color: '#ff5f5f',
    fontSize: Scale(16),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  accountTextView: {
    alignItems: 'center',
    marginTop: Scale(30),
    flexDirection: 'row',
    marginHorizontal: Scale(30),
  },
  accountText: {
    color: '#999',
    fontSize: Scale(16),
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF5F5F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCircle: {
    backgroundColor: '#FF5F5F',
  },
  label: {
    fontSize: Scale(16),
    color: 'white',
    fontWeight: '400',
  },
  leftArrow: {
    width: Scale(24),
    height: Scale(24),
    marginTop: Scale(20),
    marginLeft: Scale(10),
},
});
