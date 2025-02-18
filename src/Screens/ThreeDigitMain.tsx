/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Text, Image, GestureResponderEvent, StyleSheet, Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {applogo, clock, clock1} from '../../assets/assets';
import CountdownTimer from '../Components/CountdownTimer';
import { useDispatch } from 'react-redux';
import { showHowToPlay } from '../Redux/Slice/commonSlice';
import HowToPlayModal from '../Components/HowToPlayModal';
import CommonBall from '../Components/CommonBall';
import Scale from '../Components/Scale';
import SingleIntegerTextInput from '../Redux/Slice/SingleIntegerTextInput';

const ThreeDigitMain = () => {
  const [selectedOption, setSelectedOption] = useState('3 Mins');
  const now = new Date();
  const targetDate = new Date(now.getTime() + 3 * 60 * 1000).toISOString();
  const dispatch = useDispatch();
  const [valueOne,setValueOne] = useState(null);
  const onChangeOne = (value: any) => {
    setValueOne(value);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1, marginBottom: Scale(20)}}>
      <ScrollView
          scrollEnabled
          showsVerticalScrollIndicator = {false}
          keyboardShouldPersistTaps="always">
        <View style={{flex: 1, marginHorizontal: 20, marginTop: 20}}> 
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
            <Image
              source={clock1}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                color: selectedOption === '3 Mins' ? 'white' : 'black',
                marginLeft: 5,
              }}>
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
            <Image
              source={clock1}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
            <Text
              style={{
                color: selectedOption === '5 Mins' ? 'white' : 'black',
                marginLeft: 5,
              }}>
              5 Mins
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conditionally Render UI Based on Selection */}
        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 10,
          }}>
          {selectedOption === '3 Mins' ? (
            <View style={styles.container}> 
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginTop: 10,
                backgroundColor: '#bea2eb',
                overflow: 'hidden',
              }}>
              <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Quick3D</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    123000111
                  </Text>
                  <TouchableOpacity
                  onPress={() => dispatch(showHowToPlay())}
                    style={{
                      backgroundColor: '#e9e6ed',
                      marginHorizontal: 10,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        paddingHorizontal: 5,
                      }}>
                      How to Play
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#e9e6ed',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                    width: '90%',
                    marginTop: 10,
                  }}>
                  <CommonBall backgroundColor='#cc3939' innerText='1'/>
                  <CommonBall backgroundColor='orange' innerText='5'/>
                  <CommonBall backgroundColor='blue' innerText='0'/>
                </View>
              </View>
              <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    Time Remaining
                  </Text>
                  <CountdownTimer
                    targetDate={targetDate}
                    onComplete={() => console.log('Countdown Completed!')}
                  />
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    123000112
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',  marginVertical: Scale(20), marginHorizontal: Scale(10)}}> 
              <View> 
              <View style={{flexDirection:'row'}}>
                <Text>
                Single Digit
                </Text>
                <Text>
                Win $100.00
                </Text>
              </View>
              <Text style={{marginVertical: Scale(5)}}>
              $11.00
              </Text>
              </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f7f3f2',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Quick Guess
                  </Text>
                </TouchableOpacity>
              </View>
              <View style ={{flexDirection:'row', justifyContent: 'space-between', marginVertical: Scale(5), marginHorizontal: Scale(10)}}>
                <View style ={{flexDirection:'row'}}>
                  <CommonBall backgroundColor='#cc3939' innerText='A'/>
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Add
                  </Text>
                </TouchableOpacity>
              </View>
              <View style ={{flexDirection:'row', justifyContent: 'space-between',  marginVertical: Scale(5),marginHorizontal: Scale(10)}}>
                <View style ={{flexDirection:'row'}}>
                  <CommonBall backgroundColor='orange' innerText='B'/>
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Add
                  </Text>
                </TouchableOpacity>
              </View>
              <View style ={{flexDirection:'row', justifyContent: 'space-between', marginVertical: Scale(5), marginHorizontal: Scale(10)}}>
                <View style ={{flexDirection:'row'}}>
                  <CommonBall backgroundColor='blue' innerText='C'/>
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',  marginVertical: Scale(20), marginHorizontal: Scale(10)}}> 
              <View> 
              <View style={{flexDirection:'row'}}>
                <Text>
                Double Digit
                </Text>
                <Text>
                Win $100.00
                </Text>
              </View>
              <Text style={{marginVertical: Scale(5)}}>
              $11.00
              </Text>
              </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f7f3f2',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Quick Guess
                  </Text>
                </TouchableOpacity>
              </View>
              <View style ={{flexDirection:'row', justifyContent: 'space-between', marginVertical: Scale(5), marginHorizontal: Scale(10)}}>
                <View style ={{flexDirection:'row'}}>
                  <CommonBall backgroundColor='#cc3939' innerText='A'/>
                  <CommonBall backgroundColor='orange' innerText='B'/>
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Add
                  </Text>
                </TouchableOpacity>
              </View>
              <View style ={{flexDirection:'row', justifyContent: 'space-between',  marginVertical: Scale(5),marginHorizontal: Scale(10)}}>
                <View style ={{flexDirection:'row'}}>
                  <CommonBall backgroundColor='#cc3939' innerText='A'/>
                  <CommonBall backgroundColor='blue' innerText='C'/>
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Add
                  </Text>
                </TouchableOpacity>
              </View>
              <View style ={{flexDirection:'row', justifyContent: 'space-between', marginVertical: Scale(5), marginHorizontal: Scale(10)}}>
                <View style ={{flexDirection:'row'}}>
                  <CommonBall backgroundColor='orange' innerText='B'/>
                  <CommonBall backgroundColor='blue' innerText='C'/>
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                  <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',  marginVertical: Scale(20), marginHorizontal: Scale(10)}}> 
              <View> 
              <View style={{flexDirection:'row'}}>
                <Text>
                Triple Digit
                </Text>
                <Text>
                Win $100.00
                </Text>
              </View>
              <Text style={{marginVertical: Scale(5)}}>
              $21.00
              </Text>
              </View>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f7f3f2',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  marginBottom: Scale(5),
                  bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Quick Guess
                  </Text>
                </TouchableOpacity>
              </View>
              <View style ={{flexDirection:'row', justifyContent: 'space-between', marginVertical: Scale(5), marginHorizontal: Scale(10)}}>
                <View style ={{flexDirection:'row'}}>
                  <CommonBall backgroundColor='#cc3939' innerText='A'/>
                  <CommonBall backgroundColor='orange' innerText='B'/>
                  <CommonBall backgroundColor='blue' innerText='C'/>
                </View>
                <View>
                <View style ={{flexDirection:'row'}}>
                <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                <SingleIntegerTextInput 
                  isDisabled={false} 
                  value={valueOne}
                   placeholderText={'-'} 
                   onChange={onChangeOne}
                    onBlur={undefined}
                    keyboardType={undefined}
                    maxChar={1}
                    />
                     </View>
                     <View style ={{flexDirection: 'row', marginVertical: Scale(20), justifyContent: 'space-around'}}> 
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  // marginBottom: Scale(5),
                  // bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Box
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Alert.alert('Implement soon')}
                style={{
                  backgroundColor: '#f8bdfc',
                  borderRadius: 5,
                  paddingVertical: Scale(10),
                  paddingHorizontal: Scale(20),
                  // elevation: 2,
                  marginTop: Scale(5),
                  // marginBottom: Scale(5),
                  // bottom: 5,
                }}
                >
                  <Text style ={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                 Add
                  </Text>
                </TouchableOpacity>
                </View>
               
                </View>
              </View>
            </View>
            </View>
            
          ) : (
            <Text style={{fontSize: 18, color: 'black'}}>
              You selected 5 Mins
            </Text>
          )}
        </View>
        <View>
          <HowToPlayModal/>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: Scale(20),
    // marginHorizontal: Scale(10),
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  
});
export default ThreeDigitMain;
