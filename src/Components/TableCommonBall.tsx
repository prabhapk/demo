import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Scale from './Scale';

interface Props {
  backgroundColor: string;
  innerText: string;
}

const TableCommonBall: React.FC<Props> = ({ backgroundColor, innerText}) => {

  return (
    <View
                    style={{
                      backgroundColor: backgroundColor,
                      width: Scale(30),
                      height: Scale(30),
                      borderRadius: Scale(15),
                      marginHorizontal: Scale(5),
                      marginTop: Scale(5),
                    }}>
                    <Text
                      style={styles.innerTextStyle}>
                      {innerText}
                    </Text>
                  </View>
  );
};

const styles = StyleSheet.create({
  innerTextStyle:{
    color: 'white',
    fontSize: Scale(12),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Scale(7),
  }
});

export default TableCommonBall;
