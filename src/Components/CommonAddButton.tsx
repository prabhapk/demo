/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import Scale from './Scale'

interface Props {
  innerText: string;
  onPress: (event: GestureResponderEvent) => void;
  opacity?: any;
  isDisabled?: boolean;

}

const CommonAddButton: React.FC<Props> = ({innerText, onPress, opacity, isDisabled }) => {
  return (
    <View>
       <TouchableOpacity
                      onPress={onPress}
                      style={{
                        backgroundColor: '#9800F5',
                        // backgroundColor: isDisabled ? '#D9D9D9' : '#9800F5',
                        borderRadius: 5,
                        paddingVertical: Scale(8),
                        paddingHorizontal: Scale(18),
                        // elevation: 2,
                        marginTop: Scale(5),
                        marginBottom: Scale(5),
                        bottom: 5,
                        opacity: opacity,
                      }}
                      disabled={isDisabled}
                      >
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          fontSize: Scale(14),
                        }}>
                       {innerText}
                      </Text>
                    </TouchableOpacity>
    </View>
  )
}

export default CommonAddButton