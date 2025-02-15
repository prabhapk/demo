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
} from 'react-native';
import {applogo} from '../../assets/assets';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomHeader from '../Components/CustomHeader';
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
  {
    id: '4',
    title: 'Header 4',
    content: ['Item 19', 'Item 20', 'Item 21', 'Item 22', 'Item 23', 'Item 24'],
  },

];

const banners = [
  {id: 1, name: 'https://via.placeholder.com/350x150.png?text=Banner+1'},
  {id: 2, name: 'https://via.placeholder.com/350x150.png?text=Banner+2'},
  {id: 3, name: 'https://via.placeholder.com/350x150.png?text=Banner+3'},
];

const referalArray = [
  {id: '1', name: 'Agent'},
  {id: '2', name: 'Refer Friend'},
  {id: '3', name: 'Free Lottery'},
  {id: '4', name: 'Promotions'},
];

const HomeScreen = () => {
  const [activeHeader, setActiveHeader] = useState(data[0].id);
  const verticalListRef = useRef<FlatList>(null);
  const horizontalListRef = useRef<FlatList>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleHeaderPress = (id: string, index: number) => {
    setActiveHeader(id);

    const sectionHeight = 500;
    const scrollPosition = index * sectionHeight;

    scrollViewRef.current?.scrollTo({
      y: scrollPosition,
      animated: true,
    });

    horizontalListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 500,
  };

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      const firstVisibleItem = viewableItems[0];
      const newIndex: any = data.findIndex(
        item => item.id === firstVisibleItem.item.id,
      );

      if (newIndex !== -1 && newIndex !== activeHeader) {
        setActiveHeader(data[newIndex].id);

        horizontalListRef.current?.scrollToIndex({
          index: newIndex,
          animated: true,
          viewPosition: 0.5,
        });
      }
    }
  }).current;

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    let activeIndex = 0;
    for (let i = 0; i < data.length; i++) {
      if (scrollY >= i * 500) {
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
const openDrawerdd=()=>{
  Alert.alert("llll")
}
  return (
    <View style={{flex: 1}}>
      <CustomHeader onMenuPress={ openDrawerdd} onLoginPress={()=>{Alert.alert("login")}} />
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        stickyHeaderIndices={[2]}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={styles.swiperContainer}>
          <Swiper
            autoplay
            autoplayTimeout={3}
            showsPagination
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            containerStyle={styles.swiperContainer1}>
            {banners.map(banner => (
              <View key={banner.id} style={styles.slide}></View>
            ))}
          </Swiper>
        </View>

        {/* <FlatList
          data={referalArray}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                flexWrap: 'wrap',
                marginHorizontal: 5,
              }}>
              <Image
                source={applogo}
                style={{width: 70, height: 80, resizeMode: 'contain'}}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        /> */}
        <View style ={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:10, marginTop:20}}>
          <TouchableOpacity style ={{alignItems:"center"}}>
            <Image source={applogo} style={{width: 70, height: 80, resizeMode: 'contain'}}/>
          <Text>Referral</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={{alignItems:"center"}}>
            <Image source={applogo} style={{width: 70, height: 80, resizeMode: 'contain'}}/>
          <Text>Referral</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={{alignItems:"center"}}>
            <Image source={applogo} style={{width: 70, height: 80, resizeMode: 'contain'}}/>
          <Text>Referral</Text>
          </TouchableOpacity>
          <TouchableOpacity style ={{alignItems:"center"}}>
            <Image source={applogo} style={{width: 70, height: 80, resizeMode: 'contain'}}/>
          <Text>Referral</Text>
          </TouchableOpacity>
      
        </View>
        <View style={{backgroundColor:"white", padding:5}}>
        <FlatList
          ref={horizontalListRef} // Attach ref
          data={data}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[
                styles.headerItem,
                activeHeader === item.id && styles.activeHeaderText,
              ]}
              onPress={() => handleHeaderPress(item.id, index)}>
              <Text style={styles.headerText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        </View>

        {/* Vertical Content List */}
        <FlatList
          ref={verticalListRef}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.section}>
              <Text
                style={[
                  activeHeader === item.id && styles.verticalActiveHeader,
                  styles.verticalHeader,
                ]}>
                {item.title}
              </Text>
              <FlatList
                data={item.content}
                keyExtractor={(subItem, index) => index.toString()}
                numColumns={2}
                renderItem={({item}) => (
                  <View style={{backgroundColor:"red", flex:1, margin:5, width:"100%", padding:10, borderRadius:10, marginTop:5, height:180}}>
                  <Text style={styles.contentItem}>{item}</Text>
                  </View>
                )}
              />
            </View>
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  swiperContainer: {height: 180, marginTop: 20},
  container: {flex: 1, backgroundColor: '#fff',},
  horizontalList: {paddingVertical: 10},
  headerItem: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  activeHeaderText: {backgroundColor: '#007bff'},
  headerText: {fontSize: 16, color: '#fff'},
  section: {padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc'},
  verticalHeader: {fontSize: 18, marginBottom: 5},
  verticalActiveHeader: {fontSize: 18, fontWeight: 'bold', marginBottom: 5},
  contentItem: {fontSize: 16, paddingVertical: 2},
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  swiperContainer1: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginHorizontal: 10,
    borderRadius: 10,
  },

  dot: {
    backgroundColor: '#ccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    top: 10,
  },
  activeDot: {
    backgroundColor: '#ff5aaf',
    width: 30,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,
    top: 10,
  },
});

export default HomeScreen;
