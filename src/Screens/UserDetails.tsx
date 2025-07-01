import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import CustomHeaderRegister from '../Components/CustomHeaderRegister'
import { backGround1, leftArrowHeader } from '../../assets/assets'
import Scale from '../Components/Scale'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const UserDetails = ({navigation}: any) => {
  return (
    <View style ={{flex:1}}>
      <ImageBackground
      source={backGround1}
      style={{flex: 1}}
      > 
      <CustomHeaderRegister
     leftIconPress={() => navigation.goBack()}
      rightIconPress={()=>navigation.navigate('SignUpScreen')}
      leftIcon={leftArrowHeader}
      centerText={'My Profile'}
      />
      <View style={{marginTop: Scale(20), marginHorizontal: Scale(20)}}>
        <View style={{height: Scale(100)}}> 
       <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'black', fontSize: Scale(16)}}>Profile pic change logic will appear here</Text>
       </View>
       <View style={styles.optionsContainer}>
       <View style={styles.optionContainer}>
      <View style={styles.optionLeft}>
        <Entypo name="mobile" size={Scale(22)} color="white"  style ={styles.optionIcon}/>
        <Text style={styles.optionText}>Phone Number</Text>
      </View>
      <View style={{padding: Scale(5)}}>
      <Text style={styles.optionText}>+91**********</Text>
      </View>
    </View>
       <View style={styles.optionContainer}>
      <View style={styles.optionLeft}>
        <Feather name="lock" size={Scale(22)} color="white"  style ={styles.optionIcon}/>
        <Text style={styles.optionText}>Change password</Text>
      </View>
      <View style={{padding: Scale(5), flexDirection: 'row'}}>
      <Text style={styles.optionText}>******</Text>
      <TouchableOpacity 
      onPress={()=>navigation.navigate('PasswordChange')}
      style={{marginLeft: Scale(10)}}>
        <Entypo name="chevron-right" size={Scale(22)} color="white" />
      </TouchableOpacity>
      </View>
    </View>
       <View style={styles.optionContainer}>
      <View style={styles.optionLeft}>
        <Ionicons name="id-card" size={Scale(22)} color="white"  style ={styles.optionIcon}/>
        <Text style={styles.optionText}>User ID</Text>
      </View>
      <View style={{padding: Scale(5)}}>
      <Text style={styles.optionText}>322211</Text>
      </View>
    </View>
      </View>
       </View>
       </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    optionsContainer: {
        marginTop: Scale(20),
        backgroundColor: '#b8cff5',
        borderRadius: Scale(10),
        padding: Scale(15),
      },
      optionsContainer1: {
        marginTop: Scale(20),
        marginHorizontal: Scale(10),
        backgroundColor: '#b8cff5',
        borderRadius: Scale(10),
        padding: Scale(15),
        marginBottom: Scale(10),
      },
      optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: Scale(10),
      },
      optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      optionIcon: {
        width: Scale(25),
        height: Scale(25),
      },
      optionText: {
        fontSize: Scale(16),
        color: 'white',
        fontWeight: 'bold',
        marginLeft: Scale(10),
      },
})

export default UserDetails