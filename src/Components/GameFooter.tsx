/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React, { useRef } from 'react'
import { FooterWallet } from '../../assets/assets'
import Scale from './Scale'


interface Props {
    openSheet: (event: GestureResponderEvent) => void;
    totalAmount : number;
    totalCount: number;
    isDisabled: boolean;
  }

const GameFooter: React.FC<Props> = ({ openSheet, totalAmount, totalCount, isDisabled}) =>{
  return (
    <View style={{flex: 1,marginVertical: Scale(5),flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'white', paddingVertical: Scale(20)}}>
     <TouchableOpacity onPress={openSheet} 
    style ={{flexDirection: 'row', marginHorizontal: Scale(10),}}>
      <Image source={FooterWallet} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
      <View style ={{marginHorizontal: Scale(10)}}>
        <Text style ={{fontSize: Scale(20), fontWeight: 'bold', color: 'black' }}>$ {totalAmount}</Text>
        <Text style={{fontSize:Scale(14), color: 'black'}}>{totalCount} numbers</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
    style ={{
      height: Scale(40),
      width: Scale(85),
      borderWidth: 1,
      borderRadius: Scale(16),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: Scale(20),
      backgroundColor:isDisabled?"#e9c9f0": '#a24eb5',
      borderColor: isDisabled?"#e9c9f0": '#a24eb5',
    }}
    disabled={isDisabled}
    >
      <Text
      style ={{
        textAlign: 'center',
        fontSize: Scale(14),
        fontWeight: '500',
        color: 'white',
      }}
      >
        Pay now
      </Text>
    </TouchableOpacity>
</View>
  )
}

export default GameFooter