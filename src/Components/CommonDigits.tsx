import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CountdownTimer from './CountdownTimer';

interface Props {
  data: any;
  onPress3Digits: () => void;
}

const CommonDigits: React.FC<Props> = ({data, onPress3Digits}) => {
  return (
    <TouchableOpacity
    onPress={onPress3Digits}
    style={styles.container}>
      <Image source={data.bgImage} style={styles.subConatiner} />
      <View style={{margin:5}}>
        <Text style={styles.digitTitle}>{data.title}</Text>


      
      </View>
      <View style={{position:"absolute",bottom:40,left:10}}>
          <Text style={styles.digitTitle}>{'Time for Next booking'}</Text>
          <CountdownTimer
            targetDate={data.ends_On}
            onComplete={() => {}}
          />
        </View>
      <View style={{position:"absolute",bottom:0}} >
      <Text style={{margin: 5}}>
        ₹{data.price}/<Text style={{color: 'grey', fontSize: 10}}>Ticket</Text>
      </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {

    margin: 5,
    width: '47%',
    borderRadius: 10,
    marginTop: 5,
    height: 180,
        backgroundColor:"white"
  },
  subConatiner: {
    
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height:150,
    resizeMode:"stretch",
    position:"absolute"
  },
  digitTitle: {fontSize: 8, color: 'white', fontWeight: '600',},
  win_priceText: {fontSize: 16, color: 'gold', fontWeight: 'bold'},
  priceText: {fontSize: 30, color: 'white', fontWeight: 'bold', bottom: 10},
});

export default CommonDigits;
