import React from 'react';
import {useSelector} from 'react-redux';
import {
  Modal,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Scale from './Scale';

const Show30SecondsModal = () => {
  const modalVisible = useSelector(
    (state: any) => state.commonSlice.show30SecondsLeftAlert,
  );

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.alertTextView}>
            <Text style={{}}>Unable to purchase in last 30 Sec</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: Scale(8),
    padding: Scale(20),
    alignItems: 'center',
    elevation: 5,
    width: '90%',
    marginTop: Scale(30),
  },
  alertTextView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 30,
  },
});

export default Show30SecondsModal;
