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
                        backgroundColor: '#f7f3f2',
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
                        }}>
                       {innerText}
                      </Text>
                    </TouchableOpacity>
    </View>
  )
}

export default CommonQuickGuess