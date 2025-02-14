import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CountdownTimerProps {
  targetDate: string;
  onComplete: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onComplete }) => {
  const targetDateTime = new Date(targetDate).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDateTime - now;

    if (difference > 0) {
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { minutes, seconds };
    } else {
      onComplete();
      return { minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convert numbers into two-digit strings
  const minuteString = String(timeLeft.minutes).padStart(2, '0');
  const secondString = String(timeLeft.seconds).padStart(2, '0');

  return (
    <View style={styles.container}>
      {/* Minutes - Two Blocks */}
      <View style={styles.timerBlock}>
        <Text style={styles.timerText}>{minuteString[0]}</Text>
      </View>
      <View style={styles.timerBlock}>
        <Text style={styles.timerText}>{minuteString[1]}</Text>
      </View>

      {/* Separator */}
      <View style={styles.timerBlock}>
      <Text style={styles.separator}>:</Text>
      </View>

      {/* Seconds - Two Blocks */}
      <View style={styles.timerBlock}>
        <Text style={styles.timerText}>{secondString[0]}</Text>
      </View>
      <View style={styles.timerBlock}>
        <Text style={styles.timerText}>{secondString[1]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#DCC8F0', // Light purple background
    // padding: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  timerBlock: {
    backgroundColor: '#000', // Black background for digits
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 5,
    // minWidth: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2, // Space between digits
  },
  timerText: {
    color: '#FFF', // White text
    fontSize: 12,
    fontWeight: 'bold',
  },
  separator: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white', // Black separator ":"
    // marginHorizontal: 5,
  },
});

export default CountdownTimer;
