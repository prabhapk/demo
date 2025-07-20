import { View, Text, ScrollView, Touchable, TouchableOpacity, FlatList, StyleSheet, TouchableWithoutFeedback, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import { resultFilterList, resultHeaderList } from '../Constants/CommonFlatlist'
import { COLORS } from '../Constants/Theme'
import ResultTable from '../Components/ResultTable'
import { tableData } from '../Utils/Constants'
import Scale from '../Components/Scale'
import Icon from 'react-native-vector-icons/Feather'; // for filter icon
import Entypo from 'react-native-vector-icons/Entypo';
import { checked, unchecked } from '../../assets/assets'
const ResultScreen = () => {
    const [selectedHeaderId, setSelectedHeaderId] = useState(1);
    const [selectedFilerId, setSelectedFilerId] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
const onClose = () => setShowFilter(false);
    const renderHeader = ({ item }: any) => {
        const isSelected = item.id === selectedHeaderId;
        return (
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => setSelectedHeaderId(item.id)} style={[styles.container,]}>
                    <Text
                        style={[styles.headerText, isSelected && styles.selectedHeaderText]}>
                        {item.name}
                    </Text>

                </TouchableOpacity>
                <View style={[isSelected && styles.selectedContainer]} />
            </View>
        );
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#560303' }} stickyHeaderIndices={[0]} nestedScrollEnabled={true} keyboardShouldPersistTaps="handled">
            <View style={{ backgroundColor: COLORS.primary, elevation: 10, }}>
                <View style={styles.headrrcontainer}>
                    <View style={{ width: Scale(100) }} />
                    <Text style={styles.resultText}>Result</Text>
                    <TouchableOpacity style={styles.filterButton} onPress={() => setShowFilter(!showFilter)}>
                        <Icon name="filter" size={16} color="white" />
                        <Text style={styles.filterText}> Filter</Text>
                        <Entypo name="chevron-down" size={14} color="white" />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={resultHeaderList}
                        keyExtractor={item => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            marginHorizontal: Scale(5),
                            backgroundColor: "#481616",
                            paddingVertical: Scale(10)
                        }}
                        renderItem={renderHeader}
                    />

                </View>

            </View>
            <ResultTable tableData={tableData} />
          <Modal
      transparent
      visible={showFilter}
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* Semi-transparent backdrop */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackdrop} />
      </TouchableWithoutFeedback>

      <View style={styles.modalContainer}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {resultFilterList.map(item => (
            <TouchableOpacity
              key={item.id.toString()}
              style={styles.optionItem}
              onPress={() => {
                setSelectedFilerId(item.id);
                onClose();
              }}
            >
              <Text
                style={[
                  styles.optionText,
                  item.id === selectedFilerId && styles.selectedText,
                ]}
              >
                {item.name}
              </Text>
              <Image source={item.id === selectedFilerId ? checked : unchecked} style={{ width: Scale(25), height: Scale(25) }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
        </ScrollView>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', marginHorizontal: Scale(10),
        padding: 5, justifyContent: "center", paddingHorizontal: Scale(12),
    },
    selectedContainer: {
        borderTopColor: '#FF5A5A',
        borderTopLeftRadius: Scale(5),
        borderTopRightRadius: Scale(5),
        borderTopWidth: Scale(3),
        width: Scale(30),
    },
    headerText: { fontSize: Scale(16), color: '#987E7E', top: 3 },
    selectedHeaderText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: Scale(16),
    },
    menuContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    loginButton: {
        padding: 8,
        paddingHorizontal: 20,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    refImage: { width: Scale(30), height: Scale(30), },
    headrrcontainer: {
        backgroundColor: '#3C0D0D', // Dark maroon
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    resultText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center"
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    filterText: {
        color: 'white',
        fontSize: 14,
    },
    modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    position: 'absolute',
    top: Scale(100), // Adjust based on your layout
    width: '100%',
    alignSelf: 'center',
    maxHeight: Scale(250),
    backgroundColor: '#481616',
    borderRadius: Scale(5),
    paddingVertical: Scale(10),
  },
  scrollContent: {
    marginHorizontal: Scale(5),
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Scale(5),
    backgroundColor: '#481616',
    justifyContent:"space-between"
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    padding: Scale(10),
    fontWeight: '400',
  },
  selectedText: {
    fontWeight: 'bold',
  },
});