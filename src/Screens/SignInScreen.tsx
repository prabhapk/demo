import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  GestureResponderEvent,
  ImageBackground,
} from 'react-native';
import Scale from '../Components/Scale';
import CommonTextInput from '../Components/CommonTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonCheckBox from '../Components/CommonCheckBox';
import CustomHeaderRegister from '../Components/CustomHeaderRegister';
import Entypo from 'react-native-vector-icons/Entypo';
import { backGround1, customerServiceTopIcon, leftArrowHeader, loginImageBackground } from '../../assets/assets';
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({navigation}: any) => {
  const [selectedTab, setSelectedTab] = useState<'password' | 'otp'>('password');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetOtp = () => {
    // Add OTP logic here
    console.log('GET OTP triggered');
  };

  const handleSignIn = () => {
    // Sign-in logic here
    console.log('Sign In clicked');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#360400',}}>
      {/* <CustomHeaderRegister
     leftIconPress={() => navigation.goBack()}
      rightIconPress={()=>navigation.navigate('SignUpScreen')}
      leftIcon={leftArrowHeader}
      rightIcon={customerServiceTopIcon}
      /> */}
      <ScrollView> 
      <View style ={{marginHorizontal: Scale(5)}}>
      <Image
      source={loginImageBackground} 
      style={{width:'100%', height:Scale(300), resizeMode:'contain'}}/>
      </View>
      <View>
      <View style={{ marginTop: Scale(60), marginHorizontal: Scale(20) }}>
        <Text style={styles.headerText}>Log in</Text>
      </View>

      {/* Tab Switch */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'password' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setSelectedTab('password')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'password' ? styles.activeText : styles.inactiveText,
            ]}
          >
            Password Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'otp' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setSelectedTab('otp')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'otp' ? styles.activeText : styles.inactiveText,
            ]}
          >
            OTP Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={{ marginHorizontal: Scale(20), marginTop: Scale(40) }}>
        <CommonTextInput
          placeholderText="Please enter phone number"
          value={mobileNumber}
          keyboardType="phone-pad"
          onChange={setMobileNumber}
          isDisabled={false}
          secureTextEntry={false}
          leftIcon={
            <Ionicons name="call-outline" size={Scale(18)} color="#999" />
          }
        />

        {selectedTab === 'password' ? (
            <View style ={{marginTop: Scale(50), marginBottom: Scale(10)}}>
          <CommonTextInput
            placeholderText="Set pwd (letters & nums, 6+chars)"
            value={password}
            onChange={setPassword}
            isDisabled={false}
            secureTextEntry
            showEyeIcon
            leftIcon={
              <Ionicons name="lock-closed-outline" size={Scale(18)} color="#999" />
            }
          />
           </View>
          
        ) : (
          <View style ={{marginTop: Scale(50), marginBottom: Scale(40)}}>
          <CommonTextInput
            placeholderText="Enter OTP"
            value={otp}
            onChange={setOtp}
            isDisabled={false}
            secureTextEntry={false}
            keyboardType="numeric"
            leftIcon={
              <Ionicons name="keypad-outline" size={Scale(18)} color="#999" />
            }
            rightButton={
              <TouchableOpacity onPress={handleGetOtp}>
                <Text style={{ color: '#4DA1FF', fontWeight: 'bold' }}>GET OTP</Text>
              </TouchableOpacity>
            }
          />
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={()=> navigation.navigate('SignInScreen') }
          style={{
            marginHorizontal: Scale(10),
            marginBottom: 16,
            marginTop: Scale(30),
          }}>
         <LinearGradient
            colors={['#FF4140', '#FFAD45']}
            start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
            style={[
              styles.signInButton,
            ]}>
            <Text style={styles.signInButtonText}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>

      {/* Google Sign-In */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <TouchableOpacity
      onPress={()=>navigation.navigate('SignUpScreen')}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: Scale(40),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: Scale(10),
  },
  subText: {
    fontSize: Scale(16),
    fontWeight: '600',
    color: 'black',
    marginVertical: Scale(2),
  },
  tabContainer: {
    flexDirection: 'row',
    // backgroundColor: '#cce6ff',
    borderColor: '#ff5f5f',
    backgroundColor: '#2e0b0b',
    borderRadius: 999,
    marginHorizontal: Scale(20),
    marginTop: Scale(30),
    padding: Scale(4),
    borderWidth:1
  },
  tab: {
    flex: 1,
    paddingVertical: Scale(12),
    borderRadius: Scale(25),
    alignItems: 'center',
    backgroundColor: '#2e0b0b',
  },
  activeTab: {
    backgroundColor: 'white',
    // backgroundColor: '#ff5f5f',
    // borderColor: '#ff5f5f',
    borderColor: '#ff5f5f',
    borderWidth: 1
  },
  inactiveTab: {
    backgroundColor: 'transparent',
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
  signInButton: {
    marginTop: Scale(20),
    marginHorizontal: Scale(20),
    backgroundColor: '#b3d9ff',
    paddingVertical: Scale(14),
    borderRadius: Scale(25),
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: Scale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  googleButton: {
    marginTop: Scale(20),
    marginHorizontal: Scale(20),
    paddingVertical: Scale(12),
    borderRadius: Scale(30),
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  googleText: {
    fontSize: Scale(14),
    color: '#555',
  },
  registerText: {
    textAlign: 'center',
    marginTop: Scale(25),
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: Scale(22),
  },
});
