import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Scale from './Scale';
import TableCommonBall from './TableCommonBall';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../Constants/Theme';

interface ResultTableProps {
  tableData: any[];
  showHeader?: boolean;
}

const ResultTable: React.FC<ResultTableProps> = ({ tableData,showHeader }) => {
  const [onTableSelect, setOnTableSelect] = useState('ResultHistory');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Get data for the current page
  const currentData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Page Change
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const tableRenderItem = ({ item, index }: { item: any; index: number }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Scale(5),
        backgroundColor: index % 2 === 0 ? '#540000' : '#5C1818',
        borderBottomWidth: 1,
        borderColor: '#5C1818',
      }}>
      <View style={{ flex: 1, paddingLeft: Scale(10) }}>
        <Text style={{ color: COLORS.white }}>{item.name}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ color: COLORS.white }}>{item.time}</Text>
      </View>
      <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'center' }}>
        <TableCommonBall backgroundColor="#DE3C3F" innerText={item.balls[0]} borderColor={'#DE3C3F'} />
        <TableCommonBall backgroundColor="#EC8204" innerText={item.balls[1]} borderColor={'#EC8204'} />
        <TableCommonBall backgroundColor="#066FEA" innerText={item.balls[2]} borderColor={'#066FEA'} />
      </View>
    </View>
  );

  return (
    <View>
      <View style={{ marginTop: Scale(10), marginHorizontal: Scale(10) }}>
        {showHeader && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#360400',
          }}>
          {['ResultHistory', 'MyOrders'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setOnTableSelect(tab)}
              style={{
                padding: Scale(10),
                backgroundColor: '#360400',
                borderBottomWidth: onTableSelect === tab ? Scale(5) : 0,
                borderBottomColor: onTableSelect === tab ? '#ff5f5f' : 'transparent',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  padding: Scale(10),
                  fontWeight: onTableSelect === tab ? 'bold' : '400',
                }}>
                {tab === 'ResultHistory' ? 'Result History' : 'My Order'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        )}
        <View style={{ marginVertical: Scale(20) }}>
          {onTableSelect === 'ResultHistory' ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#812B2B',
                  paddingVertical: Scale(5),
                }}>
                <View style={{ flex: 1, paddingLeft: Scale(10) }}>
                  <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Name</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ color:COLORS.white, fontWeight: 'bold' }}>Time</Text>
                </View>
                <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'center' }}>
                  <TableCommonBall backgroundColor="#DE3C3F" innerText="A" borderColor={'#DE3C3F'} />
                  <TableCommonBall backgroundColor="#EC8204" innerText="B" borderColor={'#EC8204'} />
                  <TableCommonBall backgroundColor="#066FEA" innerText="C" borderColor={'#066FEA'} />
                </View>
              </View>

              <FlatList
                data={currentData}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={tableRenderItem}
              />

              {/* Pagination Controls */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: Scale(10),
                  alignSelf: 'center',
                  backgroundColor: '#812B2B',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: Scale(10),
                }}>
                <Text
                  style={{
                    borderRadius: Scale(10),
                    padding: Scale(10),
                    borderColor: '#812B2B',
                    borderWidth: 1,
                    height: Scale(40),
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
                  }}>
                  Total {tableData.length}
                </Text>

                {[...Array(totalPages)].map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => changePage(index + 1)}
                    style={{
                      backgroundColor: currentPage === index + 1 ? 'gold' : '#812B2B',
                      borderRadius: Scale(10),
                      padding: Scale(10),
                      borderColor: '#812B2B',
                      borderWidth: 1,
                      height: Scale(40),
                      width: Scale(40),
                      marginHorizontal: Scale(5),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{index + 1}</Text>
                  </TouchableOpacity>
                ))}

                {/* Left Arrow */}
                <TouchableOpacity
                  onPress={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    backgroundColor: currentPage === 1 ? '#5F1616' : '#5F1616',
                    borderRadius: Scale(10),
                    padding: Scale(10),
                    borderColor: '#812B2B',
                    borderWidth: 1,
                    height: Scale(40),
                    width: Scale(40),
                    marginHorizontal: Scale(5),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome5 name={'chevron-left'} size={15} color={
                    
                    currentPage === 1 ? 'grey' : 'white'
                    
                    } />
                </TouchableOpacity>

                {/* Right Arrow */}
                <TouchableOpacity
                  onPress={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{
                    backgroundColor: currentPage === 1 ? '#5F1616' : '#5F1616',
                    borderRadius: Scale(10),
                    padding: Scale(10),
                    borderColor: '#5F1616',
                    borderWidth: 1,
                    height: Scale(40),
                    width: Scale(40),
                    marginHorizontal: Scale(5),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome5 name={'chevron-right'} size={15} 
                  color={ currentPage === 1 ? 'white' : 'grey'} />
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
              Here your orders will show when you have placed an order.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ResultTable;
