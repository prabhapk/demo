/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import Scale from './Scale'

interface Props {
  innerText: string;
  onPress: () => void;
}

const CommonQuickGuess: React.FC<Props> = ({innerText, onPress }) => {
  return (
    <View>
       <TouchableOpacity
                      onPress={onPress}
                      style={{
                        backgroundColor: '#F7F8FC',
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
                          fontSize: Scale(16),
                        }}>
                       {innerText}
                      </Text>
                    </TouchableOpacity>
    </View>
  )
}

export default CommonQuickGuess