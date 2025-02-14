/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Text, Image} from 'react-native';
import React, { useState } from 'react';
import {applogo} from '../../assets/assets';
import CountdownTimer from '../Components/CountdownTimer';

const ThreeDigitMain = () => {
    const [selectedOption, setSelectedOption] = useState('3 Mins');
    const now = new Date();
    const targetDate = new Date(now.getTime() + 3 * 60 * 1000).toISOString();
  return (
    <View style={{ backgroundColor: 'gray', flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            padding: 10,
            borderRadius: 10,
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => setSelectedOption('3 Mins')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '48%',
              backgroundColor: selectedOption === '3 Mins' ? 'pink' : 'white',
              borderRadius: 5,
              borderWidth: 1,
              padding: 10,
            }}>
            <Image source={applogo} style={{ width: 30, height: 30 }} />
            <Text style={{ color: selectedOption === '3 Mins' ? 'white' : 'black', marginLeft: 5 }}>
              3 Mins
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedOption('5 Mins')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '48%',
              backgroundColor: selectedOption === '5 Mins' ? 'pink' : 'white',
              marginLeft: 10,
              borderRadius: 5,
              borderWidth: 1,
              padding: 10,
            }}>
            <Image source={applogo} style={{ width: 30, height: 30 }} />
            <Text style={{ color: selectedOption === '5 Mins' ? 'white' : 'black', marginLeft: 5 }}>
              5 Mins
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conditionally Render UI Based on Selection */}
        <View style={{ marginTop: 20, padding: 10, backgroundColor: 'white', flex: 1, borderRadius: 10 }}>
          {selectedOption === '3 Mins' ? (
            <View style ={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:10, marginTop:20, backgroundColor: '#bea2eb', overflow: 'hidden'}}>
                <View style ={{paddingHorizontal:10, paddingVertical:20}}>
                    <Text style ={{fontSize:14, fontWeight:"bold"}}>
                        Quick3D
                    </Text>
                    <View style ={{flexDirection:"row"}}>
                    <Text style ={{fontSize:14, fontWeight:"bold"}}>
                        123000111
                    </Text>
                    <TouchableOpacity style ={{backgroundColor: '#e9e6ed', marginHorizontal:10, borderRadius:5}}>
                    <Text style ={{fontSize:14, fontWeight:"400", paddingHorizontal:5}}>
                            How to Play
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style ={{flexDirection:"row", backgroundColor:"#e9e6ed", paddingHorizontal:10, paddingVertical:5, borderRadius:5, width: '100%', marginTop:10,}}>
                        <View style ={{backgroundColor:"red", width:30, height:30, borderRadius:15, marginHorizontal:5,marginTop:5}}>
                            <Text style ={{color:"white", fontSize:16, fontWeight:"bold", textAlign:"center",marginTop:3}}>
                                1
                            </Text>
                        </View>
                        <View style ={{backgroundColor:"orange", width:30, height:30, borderRadius:15, marginHorizontal:15,marginTop:5,}}>
                            <Text style ={{color:"white", fontSize:16, fontWeight:"bold", textAlign:"center",marginTop:3}}>
                                5
                            </Text>
                        </View>
                        <View style ={{backgroundColor:"blue", width:30, height:30, borderRadius:15, marginHorizontal:5,marginTop:5}}>
                            <Text style ={{color:"white", fontSize:16, fontWeight:"bold", textAlign:"center",marginTop:3}}>
                                0
                            </Text>
                        </View>
                    </View>
                </View>
                <View style ={{paddingHorizontal:10, paddingVertical:20}}>
                    <View> 
                    <Text style ={{fontSize:14, fontWeight:"bold"}}>
                        Time Remaining
                    </Text>
                    <CountdownTimer 
        // targetDate="2025-12-31T23:59:59" // Example static target date
        targetDate={targetDate}
        onComplete={() => console.log("Countdown Completed!")}
      />
                    <Text style ={{fontSize:14, fontWeight:"bold"}}>
                        123000112
                    </Text>
                    </View>
                </View>
            </View>
          ) : (
            <Text style={{ fontSize: 18, color: 'black' }}>You selected 5 Mins</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ThreeDigitMain;
