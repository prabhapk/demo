/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Scale from './Scale';
import { headerWallet } from '../../assets/assets';

interface Props {
  HeaderText: string;
  leftonPress: (event: GestureResponderEvent) => void;
  leftImage: any;
  rightImage: any;
}

const GameHeader: React.FC<Props> = ({
  HeaderText,
  leftonPress,
  leftImage,
  rightImage,
}) => {


  //   const handlePress = () => {
  //     if (!isSaveSelected) {
  //       dispatch(addWatchList({companyId: companyId, productId: productId}));
  //     } else {
  //       dispatch(removeWatchList({companyId: companyId, productId: productId}));
  //     }
  //     setSaveSelected(!isSaveSelected);
  //   };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          paddingVertical: 10,
        }}>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity style={styles.leftImageStyle} onPress={leftonPress}>
            <Image
              source={leftImage}
              resizeMode="contain"
              tintColor={'black'}
              style={styles.leftImageSize}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10,}}>
          <Text style={styles.headerTextStyle}>{HeaderText}</Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            onPress={() => Alert.alert('Will show the wallet screen soon')}
          style ={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
            <Text>
              Balance
            </Text>
            <Text>
             200.00
            </Text>
            </View>
            <View>
              <Image
                source={headerWallet}
                resizeMode="contain"
                style={{width: 30, height: 30, marginLeft: Scale(10)}}
                />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Scale(10),
  },
  leftImageStyle: {
    // backgroundColor: 'white',
    // height: 33,
    // width: 33,
    // padding: 8,
    // marginVertical: 5,
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'white',
  },
  leftImageSize: {
    alignItems: 'center',
    marginHorizontal: 4,
    marginVertical: 2,
    resizeMode: 'contain',
    height:20,
    width: 20,
    marginTop: 10,
  },
  headerTextStyle: {
    textAlign: 'center',
    fontSize: Scale(18),
    fontWeight: 'bold',
    color: 'black',
  },
  rightImageStyle: {
    backgroundColor: 'transparent',
    height: 33,
    width: 33,
    padding: 8,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  logo: {
    marginLeft: Scale(40),
  },
});

export default GameHeader;
