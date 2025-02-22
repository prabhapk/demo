import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import Scale from './Scale';

const ResultTable = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => {
          console.log("Tab Changed:", e); // Debugging log
          setIndex(e);
        }}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item title="Result History" titleStyle={styles.tabTitle} />
        <Tab.Item title="My Orders" titleStyle={styles.tabTitle} />
      </Tab>

      {/* Force re-rendering by using key */}
      <TabView key={index} value={index} onChange={setIndex} animationType="spring" style={styles.tabView}>
        <TabView.Item style={styles.tabItem}>
          <Text style={styles.text}>Recent</Text>
          <Text style={styles.text}>Recent</Text>
          <Text style={styles.text}>Recent</Text>
        </TabView.Item>
        <TabView.Item style={styles.tabItem}>
          <Text style={styles.text}>Favorite</Text>
          <Text style={styles.text}>Favorite</Text>
          <Text style={styles.text}>Favorite</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the component takes up space
    marginHorizontal: Scale(20),
  },
  tabTitle: {
    fontSize: 12,
  },
  tabView: {
    flex: 1, // Ensures it takes full available height
  },
  tabItem: {
    width: '100%',
    flex: 1, // Ensures content is visible
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray', // Debugging background color
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default ResultTable;
