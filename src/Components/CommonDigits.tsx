import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CountdownTimer from './CountdownTimer';

interface Props {
  data: any;
}

const CommonDigits: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subConatiner}>
        <Text style={styles.digitTitle}>{data.title}</Text>
        <View style={{marginTop: 10}}>
          <Text style={styles.win_priceText}>{'WIN PRIZE'}</Text>
          <Text style={styles.priceText}>₹{data.win_price}</Text>
        </View>

        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <Text style={styles.digitTitle}>{'Time for Next booking'}</Text>
          <CountdownTimer
            targetDate={data.ends_On}
            onComplete={() => {}}
          />
        </View>
      </View>
      <Text style={{margin: 5}}>
        ₹{data.price}/<Text style={{color: 'grey', fontSize: 10}}>Ticket</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    width: '48%',
    borderRadius: 10,
    marginTop: 5,
    height: 200,
  },
  subConatiner: {
    backgroundColor: 'blue',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 170,
    padding: 10,
  },
  digitTitle: {fontSize: 12, color: 'white'},
  win_priceText: {fontSize: 16, color: 'gold', fontWeight: 'bold'},
  priceText: {fontSize: 30, color: 'white', fontWeight: 'bold', bottom: 10},
});

export default CommonDigits;
