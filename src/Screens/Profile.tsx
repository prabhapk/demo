import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Scale from '../Components/Scale';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  close,
  profileCommissionImage,
  profileCustomerServiceImage,
  profileLotteriesImage,
  profileTransactionImage,
  profileTwentyFourImage,
  profileTwentyFourImage1,
  tootTipImage,
  vipBadgeZero,
  vipBorder,
  wallet,
} from '../../assets/assets';
import Modal from 'react-native-modal';
import { Wallet } from 'lucide-react-native';
import WalletInfoModal from '../Components/Modal/WalletInfoModal';

const ProfileScreen = ({navigation}: any) => {
  const [showLogoutButton, setShowLogoutButton] = useState(true);
  const [showLoginButton, setShowLoginButton] = useState(true);
  const tabItems = [
    {label: 'Lotteries', image: profileLotteriesImage},
    {label: 'Commission', image: profileCommissionImage},
    {
      label: 'Transactions',
      image: profileTransactionImage,
    },
    {
      label: 'Customer Service',
      image: profileCustomerServiceImage,
    },
  ];
  const [isRechargeModalVisible, setRechargeModalVisible] = useState(false);
  const [isWithdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const toggleModalRecharge = () => {
    setRechargeModalVisible(!isRechargeModalVisible);
  };
  const toggleModalWithdraw = () => {
    setWithdrawModalVisible(!isWithdrawModalVisible);
  };

  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {showLoginButton ? (
        <TouchableOpacity
        onPress={()=> navigation.navigate('SignInScreen') }
          style={{
            marginHorizontal: Scale(5),
            marginBottom: 16,
          }}>
          <LinearGradient
            colors={['#FF4140', '#FFAD45']}
            start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
            style={[
              styles.loginBox,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <Text style={styles.loginText}>Please Login</Text>
            <Entypo
              name="chevron-right"
              size={Scale(30)}
              color="white"
              style={{marginLeft: Scale(10)}}
            />
          </LinearGradient>
        </TouchableOpacity>
        ): (
          <View style={{marginTop: Scale(20)}}></View>
        )}

        {/* <View style={styles.walletCard}> */}
        <LinearGradient
          colors={['#851701', '#8F4E01']}
          start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
          style={styles.walletCard}>
          <Text style={styles.walletTitle}>Total Wallet</Text>
          <Text style={styles.walletAmount}>₹ 0.00</Text>

          <View style={styles.walletRow}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.walletSub}>Recharge Wallet</Text>
                <TouchableOpacity
                  onPress={() => setRechargeModalVisible(true)}>
                   <Image
                  source={tootTipImage}
                  style ={{width: Scale(15), height: Scale(15),marginLeft: Scale(5)}}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.walletSub}>₹ 0.00</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.walletSub}>Withdraw Wallet</Text>
                <TouchableOpacity
                  onPress={() => setWithdrawModalVisible(true)}>
                  <Image
                  source={tootTipImage}
                  style ={{width: Scale(15), height: Scale(15),marginLeft: Scale(5)}}
                  />

                </TouchableOpacity>
              </View>
              <Text style={styles.walletSub}>₹ 0.00</Text>
            </View>
          </View>
        </LinearGradient>
        {/* </View> */}

        <View style={styles.actionRow}>
          <LinearGradient
            colors={['#ED310F', '#F5AF1A']}
            start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
            style={styles.actionButton}>
            <TouchableOpacity
             onPress={() => {
              navigation.navigate('WalletScreen');
            }}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.buttonText}>Recharge</Text>
                <Image
                  source={wallet}
                  resizeMode="contain"
                  style={{
                    height: Scale(50),
                    width: Scale(50),
                    marginHorizontal: Scale(5),
                  }}
                />
              </View>
              <Text style={styles.subText}>Recharge without limit</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#ED310F', '#F5AF1A']}
            start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
            style={styles.actionButton}>
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('Withdraw');
            }}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.buttonText}>Withdraw</Text>
                <Image
                  source={wallet}
                  resizeMode="contain"
                  style={{
                    height: Scale(50),
                    width: Scale(50),
                    marginHorizontal: Scale(5),
                  }}
                />
              </View>
              <Text style={styles.subText}>3 seconds to payment</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        {/* Vip  Badge View */}
        <TouchableOpacity
          onPress={()=> 
            navigation.navigate('VipLevelDetailsScreen')
          }
        style={{
          borderColor: '#FF4242',
          borderWidth: Scale(2),
          borderRadius: Scale(10),
          padding: Scale(10),
          marginVertical: Scale(20),
        }}>
        <View style ={{flexDirection: 'row', alignItems: 'center', padding: Scale(10)}}>
          <Image source={vipBadgeZero}
          resizeMode='contain'
          style={{
            width: Scale(50),
            height: Scale(50),
          }}
          />
          <View> 
          <Text style={{color: 'white', fontSize: Scale(22), marginHorizontal: Scale(30)}}>
            VIP 0
          </Text>
          <Text style={{color: 'white', fontSize: Scale(22), marginHorizontal: Scale(30)}}>
            future text
          </Text>
          </View>
        </View>


        </TouchableOpacity>

        {/* ======== */}
        <View style={styles.bottomTabs}>
          {tabItems.map(item => (
            <TouchableOpacity
              key={item.label}
              style={{alignItems: 'center', marginHorizontal: Scale(5)}}>
              <View style={{position: 'relative'}}>
                <Image
                  source={item.image}
                  style={{
                    height: Scale(60),
                    width: Scale(60),
                    marginBottom: Scale(5),
                  }}
                />
                {item.label === 'Customer Service' && (
                  <Image
                    source={profileTwentyFourImage1}
                    style={{
                      height: Scale(24),
                      width: Scale(24),
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      zIndex: 1,
                    }}
                  />
                )}
              </View>
              <Text style={styles.tabItem}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputRow}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
            onPress={() => {
              // navigation.navigate('WalletScreen');
          
            }}>
            <Text style={styles.inputLabel}>Password</Text>
            <Entypo name="chevron-right" size={Scale(20)} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%', // Ensures it spans the row
            }}
            onPress={() => {
              // handle press
            }}>
            <Text style={styles.inputLabel}>Languages</Text>
            <Entypo name="chevron-right" size={Scale(20)} color="white" />
          </TouchableOpacity>
        </View>
        {showLogoutButton ? (
        <View style={{marginTop: Scale(40)}}>
          <TouchableOpacity
            style={styles.logoutButton}
            // onPress={handleLogout}
          >
            <Text style={styles.logoutText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
        ): (
          <View style={{marginTop: Scale(20)}}></View>
        )}
      <WalletInfoModal
       isVisible={isRechargeModalVisible} 
       toggleModal={toggleModalRecharge} 
       headerText="Recharge Wallet"
        bodyText="This is wallet balance that can just be used to buy lottery tickets and cant withdraw. This wallet includes recharge amount, betting bonus for free and activity!" />
      <WalletInfoModal
       isVisible={isWithdrawModalVisible} 
       toggleModal={toggleModalWithdraw} 
       headerText="Withdraw Wallet"
        bodyText="This is wallet balance that can just be used to withdraw and betting, including winning prize, reference bonus and commission!" />

      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#360400',
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  loginBox: {
    borderRadius: 16,
    padding: 16,
    flex: 1,
  },
  loginText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  walletCard: {
    backgroundColor: '#5a0000',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    marginHorizontal: Scale(5),
  },
  walletTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: Scale(10),
  },
  walletAmount: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  walletRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Scale(20),
  },
  walletSub: {
    color: '#fff',
    fontSize: Scale(16),
    fontWeight: 'bold',
    paddingVertical: Scale(5),
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginHorizontal: Scale(5),
    marginTop: Scale(10),
  },
  actionButton: {
    width: '48%',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    marginTop: Scale(20),
  },
  tabItem: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    marginVertical: Scale(5),
  },
  inputRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#944040',
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Scale(5),
  },
  inputLabel: {
    color: '#fff',
    fontSize: Scale(18),
    fontWeight: 'bold',
  },
  logoutButton: {
    borderWidth: 2,
    borderColor: '#ff5f5f',
    backgroundColor: '#2e0b0b',
    borderRadius: 999,
    paddingVertical: 15,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  logoutText: {
    color: '#ff5f5f',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
