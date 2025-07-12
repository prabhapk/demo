import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Alert,
  ImageBackground,
} from 'react-native';
import {
  agent,
  banner1,
  banner2,
  banner3,
  banner4,
  colourPrediction,
  dice1,
  dice3,
  gifAgent,
  gifLottery,
  gifPromotion,
  gifRefer,
  lottery,
  LucwinImage,
  promotion,
  Quick3DImage,
  refer,
  DearLotteryImage,
  KeralaLotteryImage,
  KubberLotteryImage,
  ActiveTabBg,
  ActiveTabInitialImg,
  quick3min,
  bhutan,
  skywin,
  chennaiLottery,
  gameTypeAct

} from '../../assets/assets';
import CustomHeader from '../Components/CustomHeader';
import CommonDice from '../Components/CommonDice';
import CommonDigits from '../Components/CommonDigits';
import CommonBanner from '../Components/CommonBanner';
import FastImage from 'react-native-fast-image';
import Scale from '../Components/Scale';
import { HomeScreenFlatlist } from '../Constants/CommonFlatlist';
import HomeScreenGameHeaders from '../Components/HomeScreenGameHeaders';
import CasinoScreen from './CasinoScreen';
import LotteryScreen from './Lottery/LotteryScreen';


const HomeScreen = ({navigation}: {navigation: any}) => {
  const data = [
    {
      id: '1',
      title: 'Header 1',
      content: ['Item 1'],
    },
    {
      id: '2',
      title: 'Header 2',
      content: ['Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12'],
    },
    {
      id: '3',
      title: 'Header 3',
      content: ['Item 13', 'Item 14', 'Item 15', 'Item 16', 'Item 17', 'Item 18'],
    },
  ];

  const [gameList, setGameList]=useState(HomeScreenFlatlist);
  const [selectedGameId, setSelectedGameId] = useState(1);
  const [activeHeader, setActiveHeader] = useState(data[0].id);
  const verticalListRef = useRef<FlatList>(null);
  const horizontalListRef = useRef<FlatList>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const getNextInterval = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const remainder = minutes % 30;
    const nextMinutes = remainder === 0 ? minutes + 30 : minutes - remainder + 30;
    
    now.setMinutes(nextMinutes);
    now.setSeconds(0);
    
    return now.toISOString();
  };
  

  
  const gamesArray = [
    {
      id: '1',
      title: 'Dice',
      name: 'Dice Game',
    },
    {
      id: '2',
      title: 'Color',
      name: 'Color Prediction',
    },
    {
      id: '3',
      title: '3Digits',
      name: '3 Digit Game',
    },
  ];
  const Dice = [
    {time: '1 Minutes', image: dice1},
    {time: '3 Minutes', image: dice3},
  ];
  
  const Color = [{win_price: '10 K', image: colourPrediction}];
  const now = new Date();
  const targetDate = new Date(now.getTime() + 0.70 * 60 * 1000).toISOString();
  const [bhutanEndsOn, setBhutanEndsOn] = useState(getNextInterval());
  
  
  const ThreeDigits = [
    {
      win_price: '10,000',
      price: '11.00',
      title: 'Quick 3D 1min',
      ends_On: "2025-07-03T18:42:27.123Z",
      bgImage:quick3min,
      gameTye:"Custom",
      id:"1minGame"
    },
       {
      win_price: '10,000',
      price: '11.00',
      title: 'Quick 3D 3min',
      ends_On: "2025-07-03T18:42:27.123Z",
      bgImage:quick3min,
       gameTye:"Custom",
      id:"3minGame"
    },
       {
      win_price: '10,000',
      price: '11.00',
      title: 'Quick 3D 5min',
      ends_On: "2025-07-03T18:42:27.123Z",
      bgImage:quick3min,
       gameTye:"Custom",
      id:"5minGame"
    },
    {
      win_price: '30,000',
      price: '11.00',
      title: 'Bhutan Jackpot',
      ends_On: bhutanEndsOn,
      bgImage:bhutan,
       gameTye:"RealGame",
      id:"real"
    },
    // {win_price: '25,000', price: '11.00', title: 'Skywin', ends_On: targetDate,  bgImage:skywin,
    //    gameTye:"RealGame",
    //   id:"real"},
    // {
    //   win_price: '30,000',
    //   price: '11.00',
    //   title: 'Chennai lottery',
    //   ends_On: targetDate,
    //   bgImage:chennaiLottery,
    //    gameTye:"RealGame",
    //   id:"real"
    // },
    // {
    //   win_price: '10,000',
    //   price: '11.00',
    //   title: 'Quick 3D 5min',
    //   ends_On: targetDate,
    //   bgImage:Quick3DImage,
    //    gameTye:"RealGame",
    //   id:"real"
    // },
    // {win_price: '15,000', price: '11.00', title: 'Lucwin', ends_On: targetDate,  bgImage:LucwinImage},
    // {
    //   win_price: '50,000',
    //   price: '11.00',
    //   title: 'Kubeer lottery',
    //   ends_On: targetDate,
    //   bgImage:KubberLotteryImage
    // },
    // {
    //   win_price: '15,000',
    //   price: '11.00',
    //   title: 'Dear lottery',
    //   ends_On: targetDate,
    //   bgImage:DearLotteryImage
    // },
    // {
    //   win_price: '15,000',
    //   price: '11.00',
    //   title: 'Kerala lottery',
    //   ends_On: targetDate,
    //   bgImage:KeralaLotteryImage
    // },
  ];
  const banners = [
    {id: 1, name: banner1},
    {id: 2, name: banner2},
    {id: 3, name: banner3},
    {id: 4, name: banner4},
  ];
  
  const referalArray = [
    {id: '1', name: 'Agent'},
    {id: '2', name: 'Refer Friend'},
    {id: '3', name: 'Free Lottery'},
    {id: '4', name: 'Promotions'},
  ];


  
  useEffect(() => {
    const interval = setInterval(() => {
      setBhutanEndsOn(getNextInterval());
      console.log('====================================');
      console.log("checkinffff",getNextInterval());
      console.log('====================================');
    }, 1000 * 60); 
  
    return () => clearInterval(interval);
  }, []);

    useEffect(() => {

  }, []);

  const handleHeaderPress = (id: string, index: number) => {
    setActiveHeader(id);

    const sectionHeight = 420; // Adjust if needed
    scrollViewRef.current?.scrollTo({
      y: index * sectionHeight,
      animated: true,
    });

    horizontalListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 420,
  };

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      const firstVisibleItem = viewableItems[0];
      const newIndex = data.findIndex(
        item => item.id === firstVisibleItem.item.id,
      );

      if (newIndex !== -1 && data[newIndex].id !== activeHeader) {
        setActiveHeader(data[newIndex].id);

        setTimeout(() => {
          horizontalListRef.current?.scrollToIndex({
            index: newIndex,
            animated: true,
            viewPosition: 0.5,
          });
        }, 200);
      }
    }
  }).current;

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    let activeIndex = 0;
    for (let i = 0; i < data.length; i++) {
      if (scrollY >= i * 420) {
        activeIndex = i;
      } else {
        break;
      }
    }

    const currentItem = data[activeIndex];
    if (currentItem && activeHeader !== currentItem.id) {
      setActiveHeader(currentItem.id);

      setTimeout(() => {
        horizontalListRef.current?.scrollToIndex({
          index: activeIndex,
          animated: true,
          viewPosition: 0.5,
        });
      }, 200);
    }
  };
  const openDrawerdd = () => {
    Alert.alert('llll');
  };

  const gameDataMap: any = {
    Dice: Dice,
    Color: Color,
    '3Digits': ThreeDigits,
  };

  // Function to render different UI based on game type


  const handleSelectGameHeader = (id: number) => {
    console.log('idasasasasa', id);
  const updatedList = gameList.map((item) => ({
    ...item,
    isSelected: item.id === id,
  }));
  setGameList(updatedList);
  setSelectedGameId(id);
};

const renderGameContent = () => {
switch (selectedGameId) {
  case 1:
    return (
      <View style={{marginTop:Scale(10)}}>
      <CasinoScreen />
      </View>
    )
    break;
  case 2:
    return (
      <>
      <LotteryScreen />
      </>
    )
    break;
  case 3:
    return (
      <>
      <Text>scratch</Text>
      </>
    )
    break;
  case 4:
    return (
      <>
      <Text>rummy</Text>
      </>
    )
    break;
  case 5:
    return (
      <>
      <Text>sports</Text>
      </>
    )
    break;
  default:
    return null;
}
}

  return (
    <View style={{flex: 1, backgroundColor: '#560303'}}>
      <CustomHeader
        onMenuPress={openDrawerdd}
        onLoginPress={() => {
          Alert.alert('login');
        }}
      />
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <CommonBanner banners={banners} />

      
        
        
          <HomeScreenGameHeaders
  headerList={gameList}
  selectedId={selectedGameId}
  onPress={() => {}}
  onSelect={handleSelectGameHeader}
/>
{renderGameContent()}

      

       
      </ScrollView>
    </View>
  );
};
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1},
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  headerItem: {
    padding: 10,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    // borderWidth: 1,

  },
  activeHeaderText: {
    borderBottomWidth:5,
    borderBottomColor: '#7C00EC',
  },
  headerText: {fontSize: 16, color: 'black', fontWeight: 'bold'},
  section: {padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc'},
  verticalHeader: {fontSize: 18, marginBottom: 5},
  verticalActiveHeader: {fontSize: 18, fontWeight: 'bold', marginBottom: 5},

  referalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  refImage: {width: 70, height: 80, resizeMode: 'cover'},
  refText: {color: 'black', fontWeight: 'bold', fontSize: 16, marginVertical: 5},
  refButton: {alignItems: 'center'},
  stickyHeader: { padding: 5,},
});

export default HomeScreen;
