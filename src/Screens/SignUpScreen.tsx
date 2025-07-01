import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import CommonTextInput from '../Components/CommonTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Scale from '../Components/Scale';
import { leftArrowHeader, customerServiceTopIcon, backGround, backGround1 } from '../../assets/assets';
import CustomHeaderRegister from '../Components/CustomHeaderRegister';

const SignUpScreen = ({ navigation }: any) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleGetOtp = () => {
    // Your OTP logic here
    console.log('GET OTP clicked');
  };


  return (
    <View style={{ flex: 1, 
    backgroundColor: '#fff' }}>
      <ImageBackground
      source={backGround1}
      style={{flex: 1}}
      >
      <CustomHeaderRegister
     leftIconPress={() => navigation.goBack()}
      rightIconPress={()=>navigation.navigate('SignUpScreen')}
      leftIcon={leftArrowHeader}
      rightIcon={customerServiceTopIcon}
      centerText={'Account Register'}
      />
      <View style={styles.container}>
        <CommonTextInput
          placeholderText="Please enter phone number"
          value={mobileNumber}
          keyboardType="phone-pad"
          onChange={setMobileNumber}
          isDisabled={false}
          secureTextEntry={false}
          leftIcon={<Ionicons name="call-outline" size={Scale(18)} color="#999" />}
        />
          </View>
        <View style ={styles.container}> 

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
              <Text style={styles.otpButtonText}>GET OTP</Text>
            </TouchableOpacity>
          }
        />
        </View>
          <View style ={styles.container}>
        <CommonTextInput
          placeholderText="Set pwd (letters & nums, 6+chars)"
          value={password}
          onChange={setPassword}
          isDisabled={false}
          secureTextEntry
          showEyeIcon
          leftIcon={<Ionicons name="lock-closed-outline" size={Scale(18)} color="#999" />}
        />
</View>
<View style ={styles.container}>
        <CommonTextInput
          placeholderText="Confirm password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          isDisabled={false}
          secureTextEntry
          showEyeIcon
          leftIcon={<Ionicons name="lock-closed-outline" size={Scale(18)} color="#999" />}
        />
        </View>
          <View style ={[styles.container, {marginBottom: Scale(20)}]}>
        <CommonTextInput
          placeholderText="Invite Code (Optional)"
          value={inviteCode}
          onChange={setInviteCode}
          isDisabled={false}
          secureTextEntry={false}
          keyboardType="numeric"
          leftIcon={<Ionicons name="keypad-outline" size={Scale(18)} color="#999" />}
        />
      </View>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={styles.registerText}>Sign in</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Scale(20),
    marginTop: Scale(60),
    // gap: Scale(30),
  },
  otpButtonText: {
    color: '#4DA1FF',
    fontWeight: 'bold',
  },
  signUpButton: {
    marginTop: Scale(40),
    marginHorizontal: Scale(20),
    backgroundColor: '#b3d9ff',
    paddingVertical: Scale(14),
    borderRadius: Scale(25),
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: Scale(16),
    fontWeight: 'bold',
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
    fontSize: Scale(18),
  },
});

export default SignUpScreen;
