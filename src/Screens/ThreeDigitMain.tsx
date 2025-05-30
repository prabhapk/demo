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
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {cancel, lefArrow, sameClock} from '../../assets/assets';
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
import ResultTable from '../Components/ResultTable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonAddButton from '../Components/CommonAddButton';
import CommonQuickGuess from '../Components/CommonQuickGuess';
import {RootState} from '../Redux/store';
import {
  setDoubleDigitA1,
  setDoubleDigitA2,
  setDoubleDigitB1,
  setDoubleDigitB2,
  setDoubleDigitC1,
  setDoubleDigitC2,
  setSingleACount,
  setSingleBCount,
  setSingleCCount,
  setSingleDigitA,
  setSingleDigitB,
  setSingleDigitC,
  setDoubleABCount,
  setDoubleACCount,
  setDoubleBCCount,
  setThreeDigitA,
  setThreeDigitB,
  setThreeDigitC,
  setThreeDigitCount,
} from '../Redux/Slice/threeDigitSlice';
import {handleShowAlert} from '../Redux/Slice/commonSlice';
import CountButtons from '../Components/CountButtons';
import Show30SecondsModal from '../Components/Show30SecondsModal';
import AnimatedText from '../Components/AnimatedText';
import { tableData } from '../Utils/Constants';

const ThreeDigitMain = ({navigation, route}: {navigation: any, route: any}) => {
  const {
    singleDigitA,
    singleDigitB,
    singleDigitC,
    singleACount,
    singleBCount,
    singleCCount,
    doubleDigitA1,
    doubleDigitA2,
    doubleDigitB1,
    doubleDigitB2,
    doubleDigitC1,
    doubleDigitC2,
    doubleABCount,
    doubleACCount,
    doubleBCCount,
    threeDigitA,
    threeDigitB,
    threeDigitC,
    threeDigitCount,
  } = useSelector((state: RootState) => state.threeDigit);
  const { endsOn } = route.params;
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('3 Mins');
  const now = new Date();
  // const [targetDate, setTargetDate] = useState(
  //   new Date(new Date().getTime() + 10 * 60 * 1000).toISOString(),
  // );
  const [targetDate, setTargetDate] = useState(endsOn ?? new Date(new Date().getTime() + 10 * 60 * 1000).toISOString());
  const [valueOne, setValueOne] = useState(null);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [islast30sec, setLast30sec] = useState(false);
  const singleDigitPrice = 11.0;
  const doubleDigitPrice = 11.0;
  const threeDigitPrice = 21.0;

  const handleThirtySecondsLeft = () => {
    setLast30sec(true);
    dispatch(handleShowAlert());
    setTimeout(() => {
      dispatch(handleShowAlert());
    }, 2000);
  };

  const handleTimerComplete = () => {
    console.log('Timer Complete, Restarting...');
    setTargetDate(
      new Date(new Date().getTime() + 10 * 60 * 1000).toISOString(),
    );
    console.log('Target Date==>', targetDate);
    setLast30sec(false);
  };

  const filterNumericInput = (value: string) => {
    return value.replace(/[^0-9]/g, '');
  };
  const onChangeSingleDigitA = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setSingleDigitA(filteredValue));
  };
  const onChangeSingleDigitB = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setSingleDigitB(filteredValue));
  };
  const onChangeSingleDigitC = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setSingleDigitC(filteredValue));
  };
  const doubleDigitA1OnChange = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setDoubleDigitA1(filteredValue));
  };
  const doubleDigitA2OnChange = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setDoubleDigitA2(filteredValue));
  };
  const doubleDigitB1OnChange = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setDoubleDigitB1(filteredValue));
  };
  const doubleDigitB2OnChange = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setDoubleDigitB2(filteredValue));
  };
  const doubleDigitC1OnChange = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setDoubleDigitC1(filteredValue));
  };
  const doubleDigitC2OnChange = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setDoubleDigitC2(filteredValue));
  };
  const onChangeThreeDigitA = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setThreeDigitA(filteredValue));
  };
  const onChangeThreeDigitB = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setThreeDigitB(filteredValue));
  };
  const onChangeThreeDigitC = (value: any) => {
    const filteredValue = filterNumericInput(value);
    dispatch(setThreeDigitC(filteredValue));
  };
  const onBlurOne = () => {
    setIsOnFocus(false);
  };
  const refRBSheet: any = useRef();
  // const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate('BottomNavigation');
  };

  const [numbers, setNumbers] = useState([]);

  const handleAdd = (
    label: string,
    value: string,
    count: number,
    selectedOption: string,
    price: number,
  ) => {
    if (value == '') {
      Alert.alert('Error', 'Please enter a value');
      return;
    }

    setNumbers(prevNumbers => [
      ...prevNumbers,
      {
        id: prevNumbers.length + 1,
        label,
        value,
        count,
        type: selectedOption,
        price,
      },
    ]);
    console.log('Label==>', label);

    // Clear input after adding data
    if (label === 'A') {
      onChangeSingleDigitA(''), dispatch(setSingleACount(3));
    } else if (label === 'B') {
      onChangeSingleDigitB(''), dispatch(setSingleBCount(3));
    } else if (label === 'C') {
      onChangeSingleDigitC(''), dispatch(setSingleCCount(3));
    } else if (label === 'AB') {
      doubleDigitA1OnChange(''), dispatch(setDoubleABCount(3));
      doubleDigitB1OnChange('');
    } else if (label === 'AC') {
      doubleDigitA2OnChange(''), dispatch(setDoubleACCount(3));
      doubleDigitC1OnChange('');
    } else if (label === 'BC') {
      doubleDigitB2OnChange(''), dispatch(setDoubleBCCount(3));
      doubleDigitC2OnChange('');
    } else if (label === 'ABC') {
      onChangeThreeDigitA(''), dispatch(setThreeDigitCount(3));
      onChangeThreeDigitB(''), onChangeThreeDigitC('');
      Alert.alert('Implement soon');
    }
  };

  const handleHeader = (value: string) => {
    const isAdded = numbers.find((item: any) => item.type !== value);

    if (isAdded) {
      Alert.alert(
        'Confirmation Reminder',
        `You have placed an order for the Text\n${selectedOption} time.\nAre you sure you want to remove your previous selections?`,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Confirm',
            onPress: () => {
              setNumbers([]), setSelectedOption(value);
            },
          },
        ],
        {cancelable: false},
      );

      return;
    }

    setSelectedOption(value);
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
  const generateDoubleDigitRandomNumbers = () => {
    dispatch(setDoubleDigitA1(getRandomNumber()));
    dispatch(setDoubleDigitA2(getRandomNumber()));
    dispatch(setDoubleDigitB1(getRandomNumber()));
    dispatch(setDoubleDigitB2(getRandomNumber()));
    dispatch(setDoubleDigitC1(getRandomNumber()));
    dispatch(setDoubleDigitC2(getRandomNumber()));
  };
  const generateThreeDigitRandomNumbers = () => {
    dispatch(setThreeDigitA(getRandomNumber()));
    dispatch(setThreeDigitB(getRandomNumber()));
    dispatch(setThreeDigitC(getRandomNumber()));
  };

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

  const sum = numbers.reduce(
    (acc: any, item: any) => acc + item.count * item.price,
    0,
  );
  const sum1 = numbers.reduce((acc: any, item: any) => acc + item.count, 0);
  console.log('sum==>', sum);
  console.log('sum1==>', sum1);

  const handleAddPermutations = (
    label: string,
    values: string[],
    count: number,
    selectedOption: string,
    price: number,
  ) => {
    if (values.length === 0) {
      Alert.alert('Error', 'Please enter a value');
      return;
    }

    // Generate permutations
    const results: Set<string> = new Set();

    const permute = (arr: string[], m: string[] = []) => {
      if (arr.length === 0) {
        results.add(m.join(''));
      } else {
        for (let i = 0; i < arr.length; i++) {
          const current = [...arr];
          const next = current.splice(i, 1);
          permute(current, [...m, ...next]);
        }
      }
    };

    permute(values);

    // Add generated values with ID to state
    setNumbers(prevNumbers => [
      ...prevNumbers,
      ...Array.from(results).map((value, index) => ({
        id: prevNumbers.length + index + 1, // Unique ID based on array length
        label,
        value,
        count,
        type: selectedOption,
        price,
      })),
    ]);

    console.log('Label==>', label);

    // Clear input after adding data
    if (label === 'A') {
      onChangeSingleDigitA(''), dispatch(setSingleACount(3));
    } else if (label === 'B') {
      onChangeSingleDigitB(''), dispatch(setSingleBCount(3));
    } else if (label === 'C') {
      onChangeSingleDigitC(''), dispatch(setSingleCCount(3));
    } else if (label === 'AB') {
      doubleDigitA1OnChange(''), dispatch(setDoubleABCount(3));
      doubleDigitB1OnChange('');
    } else if (label === 'AC') {
      doubleDigitA2OnChange(''), dispatch(setDoubleACCount(3));
      doubleDigitC1OnChange('');
    } else if (label === 'BC') {
      doubleDigitB2OnChange(''), dispatch(setDoubleBCCount(3));
      doubleDigitC2OnChange('');
    }
  };

  // Handle button press
  const handleGenerate = () => {
    if (threeDigitA !== '' && threeDigitB !== '' && threeDigitC !== '') {
      const values = [threeDigitA, threeDigitB, threeDigitC];
      console.log(
        'generatePermutationsValues==>',
        handleAddPermutations(
          'ABC',
          values,
          threeDigitCount,
          selectedOption,
          threeDigitPrice,
        ),
      );
    }
  };
  const OPTIONS = ['3 Mins', '5 Mins'];

  return (
    <View style={styles.mainContainer}>
      <GameHeader
        HeaderText={'Avis Game'}
        leftonPress={goBack}
        leftImage={lefArrow}
        rightImage={lefArrow}
      />
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        nestedScrollEnabled
        contentContainerStyle={{paddingBottom: Scale(100)}}>
        <AnimatedText
          runningText={
            'Tickets will not be available for 3 mins before the draw'
          }
        />
        <View style={styles.subContainer}>
          <FlatList
            data={OPTIONS}
            keyExtractor={item => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.startView}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handleHeader(item)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // width: '45%',
                  backgroundColor: selectedOption === item ? 'pink' : 'white',
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
                    color: selectedOption === item ? 'white' : 'black',
                    marginLeft: 5,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />

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
                          backgroundColor: '#EAE2FF',
                          marginHorizontal: 10,
                          borderRadius: 5,
                          bottom: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '400',
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            color: '#000',
                          }}>
                          How to Play
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#B098D8',
                        paddingLeft: 20,
                        paddingVertical: 5,
                        borderRadius: 10,
                        width: '90%',
                        marginTop: 5,
                        paddingRight: 30,
                      }}>
                      <CommonBall
                        backgroundColor="#DE3C3F"
                        innerText="1"
                        borderColor={'#DE3C3F'}
                      />
                      <CommonBall
                        backgroundColor="#EC8204"
                        innerText="5"
                        borderColor={'#EC8204'}
                      />
                      <CommonBall
                        backgroundColor="#066FEA"
                        innerText="0"
                        borderColor={'#066FEA'}
                      />
                    </View>
                  </View>
                  <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
                    <View>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                        Time Remaining
                      </Text>
                      <CountdownTimer
                        targetDate={targetDate}
                        onComplete={handleTimerComplete}
                        onThirtySecondsLeft={handleThirtySecondsLeft} // Pass function to child
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
                        <Text style={styles.DigitTitleText}>Single Digit</Text>
                        <Text style={styles.DigitTitleText1}> Win $100.00</Text>
                      </View>
                      <Text style={[styles.DigitTitleText,{marginVertical: Scale(5)}]}>$11.00</Text>
                    </View>
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
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <CommonBall
                        backgroundColor="#DE3C3F"
                        innerText="A"
                        borderColor={'#DE3C3F'}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={singleDigitA?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitA}
                        onBlur={onBlurOne}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                    </View>
                    {singleDigitA !== '' && (
                      <CountButtons
                        count={singleACount}
                        setCount={value => dispatch(setSingleACount(value))}
                        onHide={() => dispatch(setSingleDigitA(''))}
                        minValue={1}
                        maxValue={10}
                      />
                    )}
                    <CommonAddButton
                      innerText="ADD"
                      opacity={singleDigitA !== ''  ? 1 : 0.5}
                      onPress={() =>
                        handleAdd(
                          'A',
                          singleDigitA,
                          singleACount,
                          selectedOption,
                          singleDigitPrice,
                        )
                      }
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
                      <CommonBall
                        backgroundColor="#EC8204"
                        innerText="B"
                        borderColor={'#EC8204'}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={singleDigitB?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitB}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                    </View>
                    {singleDigitB !== '' && (
                      <CountButtons
                        count={singleBCount}
                        setCount={value => dispatch(setSingleBCount(value))}
                        onHide={() => dispatch(setSingleDigitB(''))} // Hide only B
                        minValue={1}
                        maxValue={10}
                      />
                    )}
                    <CommonAddButton
                     innerText="ADD"
                     opacity={singleDigitB !== ''  ? 1 : 0.5}
                      onPress={() =>
                        handleAdd(
                          'B',
                          singleDigitB,
                          singleBCount,
                          selectedOption,
                          singleDigitPrice,
                        )
                      }
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
                      <CommonBall
                        backgroundColor="#066FEA"
                        innerText="C"
                        borderColor={'#066FEA'}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={singleDigitC?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeSingleDigitC}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                    </View>
                    {singleDigitC !== '' && (
                      <CountButtons
                        count={singleCCount}
                        setCount={value => dispatch(setSingleCCount(value))}
                        onHide={() => dispatch(setSingleDigitC(''))} // Hide only C
                        minValue={1}
                        maxValue={10}
                      />
                    )}
                    <CommonAddButton
                      innerText="ADD"
                      opacity={singleDigitC !== ''  ? 1 : 0.5}
                      onPress={() =>
                        handleAdd(
                          'C',
                          singleDigitC,
                          singleCCount,
                          selectedOption,
                          singleDigitPrice,
                        )
                      }
                    />
                  </View>
                </View>

                {/* Double digit start  */}

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
                      <Text style={styles.DigitTitleText}>Double Digit</Text>
                      <Text style={styles.DigitTitleText1}> Win $1,000.00</Text>
                      </View>
                      <Text style={[ styles.DigitTitleText,{marginVertical: Scale(5)}]}>$11.00</Text>
                    </View>
                    <CommonQuickGuess
                      innerText={'Quick Guess'}
                      onPress={() => {
                        generateDoubleDigitRandomNumbers();
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
                      <CommonBall
                        backgroundColor="#DE3C3F"
                        innerText="A"
                        borderColor={'#DE3C3F'}
                      />
                      <CommonBall
                        backgroundColor="#EC8204"
                        innerText="B"
                        borderColor={'#EC8204'}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={doubleDigitA1?.toString()}
                        placeholderText={'-'}
                        onChange={doubleDigitA1OnChange}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={doubleDigitB1?.toString()}
                        placeholderText={'-'}
                        onChange={doubleDigitB1OnChange}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                    </View>
                    {doubleDigitA1 !== '' && doubleDigitB1 !== '' && (
                      <View style ={{right: Scale(10)}}> 
                      <CountButtons
                        count={doubleABCount}
                        setCount={value => dispatch(setDoubleABCount(value))}
                        onHide={() => {
                          dispatch(setDoubleDigitA1(''));
                          dispatch(setDoubleDigitB1(''));
                        }}
                        minValue={1}
                        maxValue={10}
                      />
                      </View>
                    )}
                    <CommonAddButton
                      innerText="ADD"
                      opacity={doubleDigitA1 !== '' && doubleDigitB1 !== '' ? 1 : 0.5}
                      onPress={() =>
                        handleAdd(
                          'AB',
                          doubleDigitA1.toString() + doubleDigitB1.toString(),
                          doubleABCount,
                          selectedOption,
                          doubleDigitPrice,
                        )
                      }
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
                      <CommonBall
                        backgroundColor="#DE3C3F"
                        innerText="A"
                        borderColor={'#DE3C3F'}
                      />
                      <CommonBall
                        backgroundColor="#066FEA"
                        innerText="C"
                        borderColor={'#066FEA'}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={doubleDigitA2?.toString()}
                        placeholderText={'-'}
                        onChange={doubleDigitA2OnChange}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={doubleDigitC1?.toString()}
                        placeholderText={'-'}
                        onChange={doubleDigitC1OnChange}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                    </View>
                    {doubleDigitA2 !== '' && doubleDigitC1 !== '' && (
                       <View style ={{right: Scale(10)}}> 
                      <CountButtons
                        count={doubleACCount}
                        setCount={value => dispatch(setDoubleACCount(value))}
                        onHide={() => {
                          dispatch(setDoubleDigitA2(''));
                          dispatch(setDoubleDigitC1(''));
                        }}
                        minValue={1}
                        maxValue={10}
                      />
                      </View>
                    )}
                    <CommonAddButton
                      innerText="ADD"
                      opacity={doubleDigitA2 !== '' && doubleDigitC1 !== '' ? 1 : 0.5}
                      onPress={() =>
                        handleAdd(
                          'AC',
                          doubleDigitA2.toString() + doubleDigitC1.toString(),
                          doubleACCount,
                          selectedOption,
                          doubleDigitPrice,
                        )
                      }
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
                      <CommonBall
                        backgroundColor="#EC8204"
                        innerText="B"
                        borderColor={'#EC8204'}
                      />
                      <CommonBall
                        backgroundColor="#066FEA"
                        innerText="C"
                        borderColor={'#066FEA'}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={doubleDigitB2?.toString()}
                        placeholderText={'-'}
                        onChange={doubleDigitB2OnChange}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={doubleDigitC2?.toString()}
                        placeholderText={'-'}
                        onChange={doubleDigitC2OnChange}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                    </View>
                    {doubleDigitB2 !== '' && doubleDigitC2 !== '' && (
                       <View style ={{right: Scale(10)}}> 
                      <CountButtons
                        count={doubleBCCount}
                        setCount={value => dispatch(setDoubleBCCount(value))}
                        onHide={() => {
                          dispatch(setDoubleDigitB2(''));
                          dispatch(setDoubleDigitC2(''));
                        }}
                        minValue={1}
                        maxValue={10}
                      />
                      </View>
                    )}
                    <CommonAddButton
                      innerText="ADD"
                      opacity={doubleDigitB2 !== '' && doubleDigitC2 !== '' ? 1 : 0.5}
                      onPress={() =>
                        handleAdd(
                          'BC',
                          doubleDigitB2.toString() + doubleDigitC2.toString(),
                          doubleBCCount,
                          selectedOption,
                          doubleDigitPrice,
                        )
                      }
                    />
                  </View>
                </View>

                {/* Three Digit start  */}
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
                      <Text style={styles.DigitTitleText}>Triple Digit</Text>
                      <Text style={styles.DigitTitleText1}> Win $25,000.00</Text>
                      </View>
                      <Text style={[styles.DigitTitleText,{marginVertical: Scale(5)}]}>
                        ${threeDigitPrice}
                      </Text>
                    </View>
                    <CommonQuickGuess
                      innerText={'Quick Guess'}
                      onPress={() => generateThreeDigitRandomNumbers()}
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
                      <CommonBall
                        backgroundColor="#DE3C3F"
                        innerText="A"
                        borderColor={'#DE3C3F'}
                      />
                      <CommonBall
                        backgroundColor="#EC8204"
                        innerText="B"
                        borderColor={'#EC8204'}
                      />
                      <CommonBall
                        backgroundColor="#066FEA"
                        innerText="C"
                        borderColor={'#066FEA'}
                      />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={threeDigitA?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeThreeDigitA}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={threeDigitB?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeThreeDigitB}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                      <SingleIntegerTextInput
                        isDisabled={false}
                        value={threeDigitC?.toString()}
                        placeholderText={'-'}
                        onChange={onChangeThreeDigitC}
                        onBlur={undefined}
                        keyboardType={'numeric'}
                        maxChar={1}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: Scale(20),
                      justifyContent: 'space-between',
                      flex: 1,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                      }}>
                      {threeDigitA !== '' &&
                        threeDigitB !== '' &&
                        threeDigitC !== '' && (
                          <CountButtons
                            count={threeDigitCount}
                            setCount={value =>
                              dispatch(setThreeDigitCount(value))
                            }
                            onHide={() => {
                              dispatch(setThreeDigitA(''));
                              dispatch(setThreeDigitB(''));
                              dispatch(setThreeDigitC(''));
                            }}
                            minValue={1}
                            maxValue={10}
                          />
                        )}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        flex: 0.7,
                      }}>
                      <CommonAddButton
                        innerText={'BOX'}
                        opacity={threeDigitA !== '' &&
                        threeDigitB !== '' &&
                        threeDigitC !== ''  ? 1 : 0.5}
                        onPress={() => handleGenerate()}
                      />
                      <CommonAddButton
                        innerText="ADD"
                        opacity={threeDigitA !== '' &&
                        threeDigitB !== '' &&
                        threeDigitC !== ''  ? 1 : 0.5}
                        onPress={() =>
                          handleAdd(
                            'ABC',
                            threeDigitA.toString() +
                              threeDigitB.toString() +
                              threeDigitC.toString(),
                            threeDigitCount,
                            selectedOption,
                            threeDigitPrice,
                          )
                        }
                      />
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
            <Show30SecondsModal />
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
            marginBottom: Scale(110),
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
          {islast30sec ? (
            <View>
              <Text>Empty</Text>
            </View>
          ) : (
            <View style={{marginHorizontal: Scale(10), marginTop: Scale(20)}}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: Scale(10),
                }}>
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
          )}
        </View>
      </RBSheet>
      <SafeAreaView
        style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <View
          style={{backgroundColor: 'white', height: Scale(80), elevation: 10}}>
          <GameFooter
            openSheet={() => refRBSheet.current.open()}
            totalAmount={sum}
            totalCount={sum1}
            isDisabled={sum1 === 0 || islast30sec}
          />
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
    // flexDirection: 'row',
    // borderRadius: 10,
    // width: '100%',
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
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
    backgroundColor: '#DBCEFB',
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  valueText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  DigitTitleText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: Scale(16),
  },
  DigitTitleText1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: Scale(14),
    top: 1,
  },
});
export default ThreeDigitMain;
