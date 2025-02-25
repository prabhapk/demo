import React, {useRef, useState} from 'react';
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
  promotion,
  refer,
} from '../../assets/assets';
import CustomHeader from '../Components/CustomHeader';
import CommonDice from '../Components/CommonDice';
import CommonDigits from '../Components/CommonDigits';
import CommonBanner from '../Components/CommonBanner';
import FastImage from 'react-native-fast-image';
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
const targetDate = new Date(now.getTime() + 3 * 60 * 1000).toISOString();
const ThreeDigits = [
  {
    win_price: '10,000',
    price: '11.00',
    title: 'Quick 3D 3min',
    ends_On: targetDate,
  },
  {
    win_price: '30,000',
    price: '11.00',
    title: 'Bhutan Jackpot',
    ends_On: targetDate,
  },
  {win_price: '25,000', price: '11.00', title: 'Skywin', ends_On: targetDate},
  {
    win_price: '30,000',
    price: '11.00',
    title: 'Chennai lottery',
    ends_On: targetDate,
  },
  {
    win_price: '10,000',
    price: '11.00',
    title: 'Quick 3D 5min',
    ends_On: targetDate,
  },
  {win_price: '15,000', price: '11.00', title: 'Lucwin', ends_On: targetDate},
  {
    win_price: '50,000',
    price: '11.00',
    title: 'Kubeer lottery',
    ends_On: targetDate,
  },
  {
    win_price: '15,000',
    price: '11.00',
    title: 'Dear lottery',
    ends_On: targetDate,
  },
  {
    win_price: '15,000',
    price: '11.00',
    title: 'Kerala lottery',
    ends_On: targetDate,
  },
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

const HomeScreen = ({navigation}: {navigation: any}) => {
  const [activeHeader, setActiveHeader] = useState(data[0].id);
  const verticalListRef = useRef<FlatList>(null);
  const horizontalListRef = useRef<FlatList>(null);
  const scrollViewRef = useRef<ScrollView>(null);

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
  const renderGameItem = (title: any, item: any) => {
    switch (title) {
      case 'Dice':
        return <CommonDice data={item} />;

      case 'Color':
        return (
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: 'center',
              borderRadius: 10,
              overflow: 'hidden',
              flexDirection: 'row',
              height: 180,
            }}>
            <View style={{flex: 0.6, flexWrap: 'wrap'}}></View>
            <View style={{flex: 1, flexWrap: 'wrap'}}>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontSize: 22,
                  color: 'white',
                }}>
                {'COLOR\nPREDICTION'}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10, flex: 1}}>
                {['1min', '3min', '5min', '10min', '15min'].map(
                  (item, index) => (
                    <Text style={{marginLeft: 5, color: 'white'}}>{item}</Text>
                  ),
                )}
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  overflow: 'hidden',
                  elevation: 5,
                  backgroundColor: 'transparent',
                  marginLeft: 10,
                  marginBottom: 10,
                  width: '90%',
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    borderRadius: 8,
                    height: 50,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold', top: 3}}>
                    Play Now
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );

      case '3Digits':
        return <CommonDigits data={item} />;

      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        onMenuPress={openDrawerdd}
        onLoginPress={() => {
          Alert.alert('login');
        }}
      />
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        stickyHeaderIndices={[2]}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <CommonBanner banners={banners} />
        <View style={styles.referalView}>
          <TouchableOpacity style={styles.refButton}>
            <FastImage
              source={gifAgent}
              style={styles.refImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.refText}>Agent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.refButton}>
            <FastImage
              source={gifRefer}
              style={styles.refImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.refText}>Refer Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.refButton}>
            <FastImage
              source={gifLottery}
              style={styles.refImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.refText}>Free Lottery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.refButton}>
            <FastImage
              source={gifPromotion}
              style={styles.refImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.refText}>Promotions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.stickyHeader}>
          <FlatList
            ref={horizontalListRef}
            data={gamesArray}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
            renderItem={({item, index}) => (
            <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={[
                  styles.headerItem,
                  activeHeader === item.id && styles.activeHeaderText,
                ]}
                onPress={() => handleHeaderPress(item.id, index)}>
                <Text style={styles.headerText}>{item.title}</Text>
              </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <FlatList
          data={gamesArray.filter(game => gameDataMap[game.title]?.length > 0)}
          ref={verticalListRef}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ThreeDigitMain')}
              style={styles.section}>
              <Text
                style={[
                  activeHeader === item.id && styles.verticalActiveHeader,
                  styles.verticalHeader,
                ]}>
                {item.title}
              </Text>
              <FlatList
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                showsVerticalScrollIndicator={false}
                data={gameDataMap[item.title] || []}
                keyExtractor={(subItem, index) => index.toString()}
                numColumns={2}
                renderItem={({item: subItem}) =>
                  renderGameItem(item.title, subItem)
                }
              />
            </TouchableOpacity>
          )}
        />
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
    backgroundColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  activeHeaderText: {backgroundColor: '#007bff'},
  headerText: {fontSize: 16, color: '#fff'},
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
  refText: {marginTop: 10},
  refButton: {alignItems: 'center'},
  stickyHeader: {backgroundColor: 'white', padding: 5,},
});

export default HomeScreen;
