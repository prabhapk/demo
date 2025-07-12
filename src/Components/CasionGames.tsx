import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Scale from './Scale';
import { gameTypeAct } from '../../assets/assets';
import FastImage from 'react-native-fast-image';
interface HeaderProps {
  onPress: () => void;
  headerList: any[];
}

const CasionGames: React.FC<HeaderProps> = ({
  onPress,
  headerList,
}) => {
  return (
    <FlatList
      contentContainerStyle={{
        flex: 1,
        marginHorizontal: Scale(10),

        justifyContent: "space-between",
        marginTop: Scale(10),
      }}
      data={headerList}
      numColumns={3}
      renderItem={({ item }) => {

        return (
          <TouchableOpacity onPress={() => { onPress() }} style={[styles.container]}>
            <FastImage
              source={item.image}
              style={styles.refImage}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={[styles.selectedHeaderText]}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5, justifyContent: "center",
    width: "33%",
    marginVertical: Scale(5),
  },
  selectedContainer: {
    backgroundColor: '#502424',
    borderBottomColor: '#FF5A5A',
    borderTopLeftRadius: Scale(5),
    borderTopRightRadius: Scale(5),
    borderBottomWidth: Scale(2)
  },
  headerText: { fontSize: Scale(12), color: '#987E7E', marginLeft: Scale(5), top: 3 },
  selectedHeaderText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: Scale(14),
    marginTop: Scale(10),
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
  refImage: { width: Scale(120), height: Scale(120), resizeMode: 'contain', borderRadius: Scale(15), },

});

export default CasionGames;
