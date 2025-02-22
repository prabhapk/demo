/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  SafeAreaView,
  Platform,
  GestureResponderEvent,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {clock1, lefArrow, sameClock} from '../../assets/assets';
import CountdownTimer from '../Components/CountdownTimer';
import {useDispatch} from 'react-redux';
import {showHowToPlay} from '../Redux/Slice/commonSlice';
import HowToPlayModal from '../Components/HowToPlayModal';
import CommonBall from '../Components/CommonBall';
import Scale from '../Components/Scale';
import SingleIntegerTextInput from '../Redux/Slice/SingleIntegerTextInput';
import TableCommonBall from '../Components/TableCommonBall';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GameFooter from '../Components/GameFooter';
import RBSheet from 'react-native-raw-bottom-sheet';
import GameHeader from '../Components/GameHeader';
import { useNavigation } from '@react-navigation/native';

const ThreeDigitMain = () => {
  const [selectedOption, setSelectedOption] = useState('3 Mins');
  const [onTableSelect, setOnTableSelect] = useState('ResultHistory');
  const now = new Date();
  const targetDate = new Date(now.getTime() + 3 * 60 * 1000).toISOString();
  const dispatch = useDispatch();
  const [valueOne, setValueOne] = useState(null);
  const onChangeOne = (value: any) => {
    setValueOne(value);
  };
  const refRBSheet: any = useRef();
  const navigation = useNavigation();
  const tableData = [
    {
      id: 1,
      name: '222222222',
      time: '08:15:00 PM',
      balls: ['4', '5', '5'],
    },
    {
      id: 2,
      name: '222222223',
      time: '08:16:00 PM',
      balls: ['5', '1', '0'],
    },
    {
      id: 3,
      name: '222222224',
      time: '08:17:00 PM',
      balls: ['5', '5', '5'],
    },
    {
      id: 4,
      name: '222222225',
      time: '08:18:00 PM',
      balls: ['2', '0', '1'],
    },
    {
      id: 5,
      name: '222222226',
      time: '08:19:00 PM',
      balls: ['5', '2', '0'],
    },
    {
      id: 6,
      name: '222222227',
      time: '08:20:00 PM',
      balls: ['5', '5', '0'],
    },
    {
      id: 7,
      name: '222222228',
      time: '08:21:00 PM',
      balls: ['5', '5', '1'],
    },
    {
      id: 8,
      name: '222222229',
      time: '08:22:00 PM',
      balls: ['5', '4', '5'],
    },
    {
      id: 9,
      name: '222222230',
      time: '08:23:00 PM',
      balls: ['1', '3', '0'],
    },
    {
      id: 10,
      name: '222222231',
      time: '08:24:00 PM',
      balls: ['1', '2', '3'],
    },
  ];
  const tableRenderItem = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: Scale(5),
          backgroundColor: 'white',
          marginHorizontal: Scale(10),
          borderBottomWidth: 1,
          borderColor: '#ccc',
        }}>
        {/* Issue Number */}
        <View style={{flex: 1, paddingLeft: Scale(10)}}>
          <Text style={{color: 'black'}}>{item.name}</Text>
        </View>

        {/* Time */}
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{color: 'black'}}>{item.time}</Text>
        </View>

        {/* Balls */}
        <View
          style={{flex: 1.5, flexDirection: 'row', justifyContent: 'center'}}>
          <TableCommonBall backgroundColor="red" innerText={item.balls[0]} />
          <TableCommonBall backgroundColor="orange" innerText={item.balls[1]} />
          <TableCommonBall backgroundColor="blue" innerText={item.balls[2]} />
        </View>
      </View>
    );
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{backgroundColor: '#f7fbff', flex: 1, marginBottom: Scale(0)}}>
        <GameHeader 
        HeaderText={'Avis Game'} 
        leftonPress={()=>goBack()} 
        leftImage={lefArrow} 
        rightImage={lefArrow}/>
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ paddingBottom: Scale(100) }}
        >
        <View style={{flex: 1, marginHorizontal: 5, marginTop: 20}}>
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
                source={sameClock}
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
                source={sameClock}
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
              backgroundColor: '#f7fbff',
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
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                      Quick3D
                    </Text>
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
                      <CommonBall backgroundColor="#cc3939" innerText="1" />
                      <CommonBall backgroundColor="orange" innerText="5" />
                      <CommonBall backgroundColor="blue" innerText="0" />
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(20),
                      marginHorizontal: Scale(10),
                    }}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text>Single Digit</Text>
                        <Text>Win $100.00</Text>
                      </View>
                      <Text style={{marginVertical: Scale(5)}}>$11.00</Text>
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
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Quick Guess
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall backgroundColor="#cc3939" innerText="A" />
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
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Add
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall backgroundColor="orange" innerText="B" />
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
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Add
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall backgroundColor="blue" innerText="C" />
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
                      }}>
                      <Text
                        style={{
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(20),
                      marginHorizontal: Scale(10),
                    }}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text>Double Digit</Text>
                        <Text>Win $100.00</Text>
                      </View>
                      <Text style={{marginVertical: Scale(5)}}>$11.00</Text>
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
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Quick Guess
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall backgroundColor="#cc3939" innerText="A" />
                      <CommonBall backgroundColor="orange" innerText="B" />
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
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Add
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall backgroundColor="#cc3939" innerText="A" />
                      <CommonBall backgroundColor="blue" innerText="C" />
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
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Add
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall backgroundColor="orange" innerText="B" />
                      <CommonBall backgroundColor="blue" innerText="C" />
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
                      }}>
                      <Text
                        style={{
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(20),
                      marginHorizontal: Scale(10),
                    }}>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text>Triple Digit</Text>
                        <Text>Win $100.00</Text>
                      </View>
                      <Text style={{marginVertical: Scale(5)}}>$21.00</Text>
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
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        Quick Guess
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall backgroundColor="#cc3939" innerText="A" />
                      <CommonBall backgroundColor="orange" innerText="B" />
                      <CommonBall backgroundColor="blue" innerText="C" />
                    </View>
                    <View>
                      <View style={{flexDirection: 'row'}}>
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
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: Scale(20),
                          justifyContent: 'space-around',
                        }}>
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
                          }}>
                          <Text
                            style={{
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
                          }}>
                          <Text
                            style={{
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
            <HowToPlayModal />
          </View>
          {/* History Table */}
          <View style={{marginTop: Scale(20), marginHorizontal: Scale(10)}}>
            {/* Tabs */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'white',
              }}>
              {['ResultHistory', 'MyOrders'].map(tab => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setOnTableSelect(tab)}
                  style={{
                    padding: Scale(10),
                    backgroundColor: 'white',
                    borderBottomWidth: onTableSelect === tab ? Scale(3) : 0,
                    borderBottomColor:
                      onTableSelect === tab ? '#5c4280' : 'transparent',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      padding: Scale(10),
                      fontWeight: onTableSelect === tab ? 'bold' : '400',
                    }}>
                    {tab === 'ResultHistory' ? 'Result History' : 'My Order'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Table Header */}
            <View style={{marginVertical: Scale(20)}}>
              {onTableSelect === 'ResultHistory' ? (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#dfe9f2',
                      paddingVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flex: 1, paddingLeft: Scale(10)}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Issue
                      </Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Time
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1.5,
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <TableCommonBall backgroundColor="red" innerText="A" />
                      <TableCommonBall backgroundColor="orange" innerText="B" />
                      <TableCommonBall backgroundColor="blue" innerText="C" />
                    </View>
                  </View>

                  <FlatList
                    data={tableData}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={tableRenderItem}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Scale(10),
                      alignSelf: 'center',
                      backgroundColor: 'white',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: Scale(10),
                    }}>
                    <Text
                      style={{
                        borderRadius: Scale(10),
                        padding: Scale(10),
                        borderColor: 'white',
                        borderWidth: 1,
                        height: Scale(40),
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontWeight: 'bold',
                      }}>
                      Total 1000
                    </Text>
                    {[1, 2, 3].map(num => (
                      <TouchableOpacity
                        key={num}
                        style={{
                          backgroundColor: 'white',
                          borderRadius: Scale(10),
                          padding: Scale(10),
                          borderColor: 'white',
                          borderWidth: 1,
                          height: Scale(40),
                          width: Scale(40),
                          marginHorizontal: Scale(5),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text>{num}</Text>
                      </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#dfe4e8',
                        borderRadius: Scale(10),
                        padding: Scale(10),
                        borderColor: 'white',
                        borderWidth: 1,
                        height: Scale(40),
                        width: Scale(40),
                        marginHorizontal: Scale(5),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesome5
                        name={'chevron-left'}
                        size={15}
                        color={'grey'}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#dfe4e8',
                        borderRadius: Scale(10),
                        padding: Scale(10),
                        borderColor: 'white',
                        borderWidth: 1,
                        height: Scale(40),
                        width: Scale(40),
                        marginHorizontal: Scale(5),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesome5
                        name={'chevron-right'}
                        size={15}
                        color={'grey'}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  Showing: My Order Data
                </Text>
              )}
            </View>
          </View>
        </View>
        {/* Bottom Sheet */}
        <View style={{flex: 1, marginTop: Scale(20), marginHorizontal: Scale(10)}}>
                <RBSheet
                  ref={refRBSheet}
                  height={Platform.OS === 'ios' ? Scale(500) : Scale(400)}
                  draggable={true}
                  closeOnPressMask={true}
                  customStyles={{
                    wrapper: {
                      backgroundColor: 'transparent',
                    },
                    container: {
                      borderTopLeftRadius: Scale(20),
                      borderTopRightRadius: Scale(20),
                      paddingHorizontal: Scale(10),
                    },
                    draggableIcon: {
                      width: Scale(75),
                      height: Scale(5),
                      backgroundColor: '#D9D9D9',
                      borderRadius: Scale(2.5),
                      marginVertical: Scale(10),
                    },
                  }}
                  onClose={() => {}}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                   <Text>
                    Hello
                    </Text>
                  </View>
                </RBSheet>
              </View>
      </ScrollView>
      <SafeAreaView style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
    <View style={{ backgroundColor: 'white', height: Scale(110) }}>
      <GameFooter 
      openSheet={()=> refRBSheet.current.open()}
      />
    </View>
  </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: Scale(20),
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
