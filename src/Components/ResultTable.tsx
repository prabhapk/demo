/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Scale from './Scale'
import TableCommonBall from './TableCommonBall'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

interface ResultTableProps {
    tableData:any;
}

const ResultTable : React.FC<ResultTableProps> = ({tableData}) => {
    const [onTableSelect, setOnTableSelect] = useState('ResultHistory');
    const tableRenderItem = ({ item, index }: { item: any; index: number }) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: Scale(5),
              backgroundColor: index % 2 === 0 ? 'white' : '#f0f1f2',
              marginHorizontal: Scale(10),
              borderBottomWidth: 1,
              borderColor: '#f0f1f2',
            }}>
            {/* Issue Number */}
            <View style={{ flex: 1, paddingLeft: Scale(10) }}>
              <Text style={{ color: 'black' }}>{item.name}</Text>
            </View>
            {/* Time */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ color: 'black' }}>{item.time}</Text>
            </View>
            {/* Balls */}
            <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'center' }}>
              <TableCommonBall backgroundColor="red" innerText={item.balls[0]} />
              <TableCommonBall backgroundColor="orange" innerText={item.balls[1]} />
              <TableCommonBall backgroundColor="blue" innerText={item.balls[2]} />
            </View>
          </View>
        );
      };
  return (
    <View>
         <View style={{marginTop: Scale(20), marginHorizontal: Scale(10)}}>
            {/* Tabs */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'white',
              }}>
              {['ResultHistory', 'MyOrders'].map(tab => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setOnTableSelect(tab)}
                  style={{
                    padding: Scale(10),
                    backgroundColor: 'white',
                    borderBottomWidth: onTableSelect === tab ? Scale(3) : 0,
                    borderBottomColor:
                      onTableSelect === tab ? '#5c4280' : 'transparent',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      padding: Scale(10),
                      fontWeight: onTableSelect === tab ? 'bold' : '400',
                    }}>
                    {tab === 'ResultHistory' ? 'Result History' : 'My Order'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Table Header */}
            <View style={{marginVertical: Scale(20)}}>
              {onTableSelect === 'ResultHistory' ? (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#f0f1f2',
                      paddingVertical: Scale(5),
                      marginHorizontal: Scale(10),
                    }}>
                    <View style={{flex: 1, paddingLeft: Scale(10)}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Issue
                      </Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Time
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1.5,
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <TableCommonBall backgroundColor="red" innerText="A" />
                      <TableCommonBall backgroundColor="orange" innerText="B" />
                      <TableCommonBall backgroundColor="blue" innerText="C" />
                    </View>
                  </View>

                  <FlatList
                    data={tableData}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={tableRenderItem}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: Scale(10),
                      alignSelf: 'center',
                      backgroundColor: 'white',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: Scale(10),
                    }}>
                    <Text
                      style={{
                        borderRadius: Scale(10),
                        padding: Scale(10),
                        borderColor: 'white',
                        borderWidth: 1,
                        height: Scale(40),
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontWeight: 'bold',
                      }}>
                      Total 1000
                    </Text>
                    {[1, 2, 3].map(num => (
                      <TouchableOpacity
                        key={num}
                        style={{
                          backgroundColor: 'white',
                          borderRadius: Scale(10),
                          padding: Scale(10),
                          borderColor: 'white',
                          borderWidth: 1,
                          height: Scale(40),
                          width: Scale(40),
                          marginHorizontal: Scale(5),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text>{num}</Text>
                      </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#dfe4e8',
                        borderRadius: Scale(10),
                        padding: Scale(10),
                        borderColor: 'white',
                        borderWidth: 1,
                        height: Scale(40),
                        width: Scale(40),
                        marginHorizontal: Scale(5),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesome5
                        name={'chevron-left'}
                        size={15}
                        color={'grey'}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#dfe4e8',
                        borderRadius: Scale(10),
                        padding: Scale(10),
                        borderColor: 'white',
                        borderWidth: 1,
                        height: Scale(40),
                        width: Scale(40),
                        marginHorizontal: Scale(5),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesome5
                        name={'chevron-right'}
                        size={15}
                        color={'grey'}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}>
                  Showing: My Order Data
                </Text>
              )}
            </View>
          </View>
    </View>
  )
}

export default ResultTable