import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface CountButtonsProps {
  count: number;
  setCount: (value: number) => void; // Function to update count in parent
  minValue?: number; // Optional: Minimum count value (default 0)
  maxValue?: number; // Optional: Maximum count value (default Infinity)
}

const CountButtons: React.FC<CountButtonsProps> = ({ count, setCount, minValue = 0, maxValue = Infinity }) => {
  
  const handleIncrease = () => {
    setCount(Math.min(maxValue, count + 1)); // Prevent exceeding max value
  };

  const handleDecrease = () => {
    setCount(Math.max(minValue, count - 1)); // Prevent going below min value
  };

  const handleTextChange = (text: string) => {
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue)) {
      setCount(Math.min(maxValue, Math.max(minValue, numericValue))); // Ensure within range
    } else if (text === "") {
      setCount(minValue); // Prevents empty input issues
    }
  };

  return (
    <View style={styles.showCountContainer}>
      <TouchableOpacity style={styles.button} onPress={handleDecrease}>
        <Text style={styles.symbol}>−</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={count.toString()}
        onChangeText={handleTextChange}
        keyboardType="numeric"
        textAlign="center"
      />
      <TouchableOpacity style={styles.button} onPress={handleIncrease}>
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  showCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0F6',
    borderRadius: 30,
    paddingHorizontal: 5,
    height: 40,
    marginLeft: 30,
  },
  button: {
    backgroundColor: '#F5F7FB',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 15,
    color: 'black',
  },
  input: {
    width: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default CountButtons;
