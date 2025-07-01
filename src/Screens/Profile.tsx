import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {agent, customerService, gift, myBets, myTransaction, notification, rebate, transfer, wallet} from '../../assets/assets';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Scale from '../Components/Scale';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}: {navigation: any}) => {
  const renderOption = (label: string, icon = gift) => (
    <View style={styles.optionContainer}>
      <View style={styles.optionLeft}>
        <Image source={icon} style={styles.optionIcon} resizeMode="contain" />
        <Text style={styles.optionText}>{label}</Text>
      </View>
      <TouchableOpacity style={{padding: Scale(5)}}>
        <Entypo name="chevron-right" size={Scale(22)} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
<View style ={{flex: 1}}> 
    <ScrollView
     style={{flex: 1, backgroundColor: '#fff'}}
    //  stickyHeaderIndices={[0]}
    //  contentContainerStyle={{flexGrow: 1}}
     >
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('UserDetails')}
        >
          <EvilIcons
            name="user"
            size={Scale(80)}
            color="grey"
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <View style={styles.loginSection}>
          <Text style={styles.SigninTextStyle}>Sign in for existing content</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} activeOpacity={0.8}>
            <LinearGradient
              colors={['#FFD93D', '#6BCB77']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Entypo
            name="chevron-right"
            size={Scale(18)}
            color="grey"
            style={{marginLeft: Scale(50), marginTop: Scale(5)}}
          />
        </TouchableOpacity>
      </View>

      {/* Wallet Section */}
      <View style={styles.walletContainer}>
        <View style={styles.walletHeader}>
          <View>
            <View style={styles.walletRow}>
              <Entypo name="wallet" size={Scale(20)} color="black" />
              <Text style={styles.walletLabel}>My Wallet</Text>
            </View>
            <Text style={styles.walletAmount}>********</Text>
          </View>

          <TouchableOpacity style={{marginLeft: Scale(10)}}>
            <EvilIcons name="refresh" size={Scale(28)} color="black" />
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Cash Balance and Withdrawable */}
        <View style={styles.walletRow}>
          <View style={{flex: 1, marginRight: Scale(10)}}>
            <View style={styles.walletRow}>
              <Entypo name="wallet" size={Scale(20)} color="black" />
              <Text style={styles.walletLabel}>Cash Balance</Text>
              <TouchableOpacity>
                <EvilIcons name="exclamation" size={Scale(20)} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.walletAmount}>********</Text>
          </View>

          <View style={{flex: 1}}>
            <View style={styles.walletRow}>
              <Entypo name="wallet" size={Scale(20)} color="black" />
              <Text style={styles.walletLabel}>Withdrawable</Text>
              <TouchableOpacity>
                <EvilIcons name="exclamation" size={Scale(20)} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.walletAmount}>********</Text>
          </View>
        </View>
      </View>

      {/* Recharge and Withdraw Blocks */}
      <View style={styles.transactionRow}>
        <View style={[styles.transactionBox, {backgroundColor: '#e3f5dc', marginRight: Scale(5)}]}>
          <Image source={wallet} style={styles.transactionImage} resizeMode="contain" />
          <View>
            <Text style={styles.transactionText}>RECHARGE</Text>
            <Text style={styles.transactionText}>Instant Deposit</Text>
          </View>
        </View>

        <View style={[styles.transactionBox, {backgroundColor: '#e3f5dc', marginLeft: Scale(5)}]}>
          <Image source={wallet} style={styles.transactionImage} resizeMode="contain" />
          <View>
            <Text style={styles.transactionText}>WITHDRAW</Text>
            <Text style={styles.transactionText}>Quick Transfer</Text>
          </View>
        </View>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        {renderOption('Gift Code', gift)}
        {renderOption('Transfer', transfer)}
        {renderOption('My Bets', myBets)}
        {renderOption('Rebate', rebate)}
        {renderOption('My Transactions', myTransaction)}
      </View>
      <View style={styles.optionsContainer1}>
        {renderOption('Notifications', notification)}
        {renderOption('Customer Service', customerService)}
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Scale(20),
    // justifyContent: 'space-between',
    marginHorizontal: Scale(10),
  },
  loginSection: {
    alignContent: 'center',
    marginRight: Scale(20),
    alignSelf: 'center',
    marginLeft: Scale(10),
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: Scale(10),
    width: Scale(100),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  SigninTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileImage: {
    marginLeft: Scale(10),
    marginTop: Scale(5),
    height: Scale(80),
    width: Scale(80),
  },
  walletContainer: {
    marginTop: Scale(20),
    marginHorizontal: Scale(10),
    backgroundColor: '#e3f5dc',
    borderRadius: Scale(10),
    padding: Scale(15),
  },
  walletHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletLabel: {
    marginLeft: Scale(10),
    color: 'black',
    fontSize: Scale(16),
  },
  walletAmount: {
    fontSize: Scale(25),
    color: 'black',
    fontWeight: 'bold',
    marginTop: Scale(5),
  },
  divider: {
    borderWidth: Scale(0.2),
    borderColor: 'black',
    marginVertical: Scale(10),
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Scale(20),
    marginHorizontal: Scale(10),
  },
  transactionBox: {
    flexDirection: 'row',
    borderRadius: Scale(10),
    padding: Scale(10),
    alignItems: 'center',
    flex: 1,
  },
  transactionImage: {
    width: Scale(50),
    height: Scale(50),
    marginRight: Scale(10),
  },
  transactionText: {
    fontSize: Scale(14),
    color: 'black',
    fontWeight: 'bold',
    marginTop: Scale(3),
  },
  optionsContainer: {
    marginTop: Scale(20),
    marginHorizontal: Scale(10),
    backgroundColor: '#e3f5dc',
    borderRadius: Scale(10),
    padding: Scale(15),
  },
  optionsContainer1: {
    marginTop: Scale(20),
    marginHorizontal: Scale(10),
    backgroundColor: '#e3f5dc',
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
    fontSize: Scale(14),
    color: 'black',
    fontWeight: 'bold',
    marginLeft: Scale(10),
  },
});

export default Profile;
