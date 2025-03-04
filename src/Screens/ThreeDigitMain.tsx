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
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {cancel, clock1, lefArrow, sameClock} from '../../assets/assets';
import CountdownTimer from '../Components/CountdownTimer';
import {useDispatch, useSelector} from 'react-redux';
import {showHowToPlay} from '../Redux/Slice/commonSlice';
import HowToPlayModal from '../Components/HowToPlayModal';
import CommonBall from '../Components/CommonBall';
import Scale from '../Components/Scale';
import SingleIntegerTextInput from '../Components/SingleIntegerTextInput';
import GameFooter from '../Components/GameFooter';
import RBSheet from 'react-native-raw-bottom-sheet';
import GameHeader from '../Components/GameHeader';
import {useNavigation} from '@react-navigation/native';
import ResultTable from '../Components/ResultTable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonAddButton from '../Components/CommonAddButton';
import CommonQuickGuess from '../Components/CommonQuickGuess';
import {RootState} from '../Redux/store';
import {
  setSingleACount,
  setSingleBCount,
  setSingleCCount,
  setSingleDigitA,
  setSingleDigitB,
  setSingleDigitC,
} from '../Redux/Slice/threeDigitSlice';
import CountButtons from '../Components/CountButtons';

const ThreeDigitMain = () => {
  const {
    singleDigitA,
    singleDigitB,
    singleDigitC,
    singleACount,
    singleBCount,
    singleCCount,
  } = useSelector((state: RootState) => state.threeDigit);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('3 Mins');
  const now = new Date();
  const targetDate = new Date(now.getTime() + 3 * 60 * 1000).toISOString();
  const [valueOne, setValueOne] = useState(null);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const onChangeSingleDigitA = (value: any) => {
    dispatch(setSingleDigitA(value));
  };
  const onChangeSingleDigitB = (value: any) => {
    dispatch(setSingleDigitB(value));
  };
  const onChangeSingleDigitC = (value: any) => {
    dispatch(setSingleDigitC(value));
  };
  const onBlurOne = () => {
    setIsOnFocus(false);
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

  const goBack = () => {
    navigation.goBack();
  };

  const [numbers, setNumbers] = useState([]);

  // const removeNumber = (id: number) => {
  //   setNumbers(numbers.filter(item => item.id !== id));
  // };

  // const handleAdd = (innerText:any, value:any) => {
  //   if (!value) {
  //     Alert.alert('Error', 'Please enter a value');
  //     return;
  //   }

  //   setNumbers((prevNumbers) => [
  //     ...prevNumbers,
  //     { id: prevNumbers.length + 1, label: innerText, value: value, count: '1' },
  //   ]);

  //   // Clear the input after adding the value
  //   if (innerText === 'A') onChangeSingleDigitA(null);

  // };
  const handleAdd = (label: string, value: number, count: number) => {
    if (!value) {
      Alert.alert('Error', 'Please enter a value');
      return;
    }

    setNumbers(prevNumbers => [
      ...prevNumbers,
      {id: prevNumbers.length + 1, label, value, count},
    ]);

    // Clear input after adding data
    if (label === 'A') {
      onChangeSingleDigitA(''), dispatch(setSingleACount(3));
    } else if (label === 'B') {
      onChangeSingleDigitB(''), dispatch(setSingleBCount(3));
    } else if (label === 'C') {
      onChangeSingleDigitC(''), dispatch(setSingleCCount(3));
    }
  };

  const getRandomNumber = () => Math.floor(Math.random() * 10);
  const removeNumber = (id: number) => {
    setNumbers(prevNumbers => prevNumbers.filter(item => item.id !== id));
  };

  const generateRandomNumbers = () => {
    dispatch(setSingleDigitA(getRandomNumber()));
    dispatch(setSingleDigitB(getRandomNumber()));
    dispatch(setSingleDigitC(getRandomNumber()));
  };

  // Debugging: Log `numbers` after state update
  useEffect(() => {
    console.log('Updated Numbers:', numbers);
  }, [numbers]);

  const toggleSheet = () => {
    if (isSheetOpen) {
      refRBSheet.current?.close();
    } else {
      refRBSheet.current?.open();
    }
  };
  return (
    <View style={styles.mainContainer}>
      <GameHeader
        HeaderText={'Avis Game'}
        leftonPress={() => goBack()}
        leftImage={lefArrow}
        rightImage={lefArrow}
      />
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{paddingBottom: Scale(100)}}>
        <View style={styles.subContainer}>
          <View style={styles.startView}>
            <TouchableOpacity
              onPress={() => setSelectedOption('3 Mins')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '45%',
                backgroundColor: selectedOption === '3 Mins' ? 'pink' : 'white',
                borderRadius: 5,
                borderWidth: 1,
                padding: 10,
                justifyContent: 'center',
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
                width: '45%',
                backgroundColor: selectedOption === '5 Mins' ? 'pink' : 'white',
                marginLeft: 10,
                borderRadius: 5,
                borderWidth: 1,
                padding: 10,
                justifyContent: 'center',
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
          <View style={styles.renderDataView}>
            {selectedOption === '3 Mins' ? (
              <View style={styles.container}>
                <View style={styles.gameDetailView}>
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
                    <Text style={{marginVertical: Scale(5)}}>
                      {singleDigitA}
                      {singleDigitB}
                      {singleDigitC}
                    </Text>
                    <CommonQuickGuess
                      innerText={'Quick Guess'}
                      onPress={() => {
                        generateRandomNumbers();
                      }}
                    />
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
                        value={singleDigitA?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitA}
                        onBlur={onBlurOne}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                    </View>
                    {singleDigitA !== null && singleACount > 0 && (
                      <CountButtons
                        count={singleACount}
                        setCount={value => dispatch(setSingleACount(value))}
                        onHide={() => dispatch(setSingleDigitA(null))} // Hide only A
                        minValue={1}
                        maxValue={10}
                      />
                    )}
                    {/* <CommonAddButton
                      innerText={'add'}
                      onPress={() => {
                        handleAdd('A', singleDigitA);
                      }}
                    /> */}
                    <CommonAddButton
                      innerText="Add"
                      onPress={() => handleAdd('A', singleDigitA, singleACount)}
                    />
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
                        value={singleDigitB?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitB}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                    </View>
                    {singleDigitB !== null && singleBCount > 0 && (
                      <CountButtons
                        count={singleBCount}
                        setCount={value => dispatch(setSingleBCount(value))}
                        onHide={() => dispatch(setSingleDigitB(null))} // Hide only B
                        minValue={1}
                        maxValue={10}
                      />
                    )}
                    {/* <CommonAddButton
                      innerText={'Add'}
                      onPress={() => {
                        handleAdd('B', valueOne);
                      }}
                    /> */}
                    <CommonAddButton
                      innerText="Add"
                      onPress={() => handleAdd('B', singleDigitB, singleBCount)}
                    />
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
                        value={singleDigitC?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitC}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                    </View>
                    {singleDigitC !== null && singleCCount > 0 && (
                      <CountButtons
                        count={singleCCount}
                        setCount={value => dispatch(setSingleCCount(value))}
                        onHide={() => dispatch(setSingleDigitC(null))} // Hide only C
                        minValue={1}
                        maxValue={10}
                      />
                    )}
                    <CommonAddButton
                      innerText="Add"
                      onPress={() => handleAdd('C', singleDigitC, singleCCount)}
                    />
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
                    <CommonQuickGuess
                      innerText={'Quick Guess'}
                      onPress={() => {
                        Alert.alert('Implement soon');
                      }}
                    />
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
                        onChange={onChangeSingleDigitA}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={valueOne}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitA}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                    </View>
                    <CommonAddButton
                      innerText={'Add'}
                      onPress={() => {
                        Alert.alert('Implement soon');
                      }}
                    />
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
                        onChange={onChangeSingleDigitA}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={valueOne}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitA}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                    </View>
                    <CommonAddButton
                      innerText={'Add'}
                      onPress={() => {
                        Alert.alert('Implement soon');
                      }}
                    />
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
                        onChange={onChangeSingleDigitA}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={valueOne}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitA}
                        onBlur={undefined}
                        keyboardType={undefined}
                        maxChar={1}
                      />
                    </View>
                    <CommonAddButton
                      innerText={'Add'}
                      onPress={() => {
                        Alert.alert('Implement soon');
                      }}
                    />
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
                    <CommonQuickGuess
                      innerText={'Quick Guess'}
                      onPress={() => {
                        Alert.alert('Implement soon');
                      }}
                    />
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
                          onChange={onChangeSingleDigitA}
                          onBlur={undefined}
                          keyboardType={undefined}
                          maxChar={1}
                        />
                        <SingleIntegerTextInput
                          isDisabled={false}
                          value={valueOne}
                          placeholderText={'-'}
                          onChange={onChangeSingleDigitA}
                          onBlur={undefined}
                          keyboardType={undefined}
                          maxChar={1}
                        />
                        <SingleIntegerTextInput
                          isDisabled={false}
                          value={valueOne}
                          placeholderText={'-'}
                          onChange={onChangeSingleDigitA}
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
                        <CommonAddButton
                          innerText={'Box'}
                          onPress={() => {
                            Alert.alert('Implement soon');
                          }}
                        />
                        <CommonAddButton
                          innerText={'Add'}
                          onPress={() => {
                            Alert.alert('Implement soon');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <ResultTable tableData={tableData} />
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
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        height={Platform.OS === 'ios' ? Scale(400) : Scale(350)} // Reduced height
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
            marginBottom: Scale(110), // Ensures footer stays visible
          },
          draggableIcon: {
            width: Scale(75),
            height: Scale(5),
            backgroundColor: '#D9D9D9',
            borderRadius: Scale(2.5),
            marginVertical: Scale(10),
          },
        }}>
        <View style={{flex: 1, marginHorizontal: 10, marginVertical: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: Scale(16),
                color: 'black',
                marginHorizontal: Scale(10),
              }}>
              My Numbers
            </Text>
            <TouchableOpacity onPress={() => setNumbers([])}>
              <AntDesign
                name={'delete'}
                size={Scale(18)}
                color={'black'}
                style={{marginRight: Scale(10)}}
              />
            </TouchableOpacity>
          </View>
          {/* inside */}

          <View style={{marginHorizontal: Scale(10), marginTop: Scale(20)}}>
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', gap: Scale(10)}}>
              {numbers.map(item => (
                <View
                  key={item.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F1F1F3',
                    borderRadius: Scale(20),
                    paddingHorizontal: Scale(15),
                    paddingVertical: Scale(8),
                    position: 'relative',
                  }}>
                  <Text
                    style={{
                      fontSize: Scale(14),
                      fontWeight: 'bold',
                      color: '#000',
                    }}>
                    {item.label} = {item.value}
                  </Text>

                  <View
                    style={{
                      backgroundColor: '#F27842',
                      borderRadius: Scale(5),
                      paddingHorizontal: Scale(5),
                      marginLeft: Scale(5),
                    }}>
                    <Text
                      style={{
                        fontSize: Scale(12),
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      x{item.count}
                    </Text>
                  </View>

                  {/* Remove Button */}
                  <TouchableOpacity
                    onPress={() => removeNumber(item.id)}
                    style={{
                      position: 'absolute',
                      top: Scale(-5),
                      right: Scale(-5),
                      backgroundColor: 'white',
                      width: Scale(18),
                      height: Scale(18),
                      borderRadius: Scale(9),
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowColor: '#000',
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 3, // Android shadow
                    }}>
                    <Image
                      source={cancel}
                      style={{width: Scale(10), height: Scale(10)}}
                      tintColor={'black'}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>
      </RBSheet>
      <SafeAreaView
        style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <View style={{backgroundColor: 'white', height: Scale(110)}}>
          <GameFooter openSheet={() => refRBSheet.current.open()} />
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f7fbff',
    flex: 1,
    marginBottom: Scale(0),
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 20,
  },
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
  cancelImage: {
    height: Scale(24),
    width: Scale(24),
    marginTop: Scale(10),
  },
  startView: {
    flexDirection: 'row',
    borderRadius: 10,
    width: '100%',
    marginHorizontal: 10,
  },
  renderDataView: {
    padding: 10,
    backgroundColor: '#f7fbff',
    flex: 1,
    borderRadius: 10,
  },
  gameDetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#bea2eb',
    overflow: 'hidden',
  },
  showCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0F6',
    borderRadius: 30,
    paddingHorizontal: 5,
    height: 40,
    marginLeft: 30,
  },
  button: {
    backgroundColor: '#F5F7FB',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 20,
  },
  symbol: {
    fontSize: 15,
    color: 'black',
  },
  input: {
    width: 50, // Set an explicit width to ensure visibility
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Ensure text is visible
    textAlign: 'center',
  },
});
export default ThreeDigitMain;
