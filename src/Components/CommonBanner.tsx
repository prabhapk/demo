import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Scale from './Scale';
import Swiper from 'react-native-swiper';

interface Props {
  banners: any;
}

const CommonBanner: React.FC<Props> = ({ banners}) => {

  return (
    <View style={styles.swiperContainer}>
              <Swiper
                autoplay
                autoplayTimeout={3}
                showsPagination
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                containerStyle={styles.swiperContainer1}>
                {banners.map((banner: { id: React.Key | null | undefined; }) => (
                  <View key={banner.id} style={styles.slide}></View>
                ))}
              </Swiper>
            </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {height: 180, marginTop: 20},
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
});

export default CommonBanner;
