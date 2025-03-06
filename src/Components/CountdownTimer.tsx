import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

interface CountdownTimerProps {
  targetDate: string;
  onComplete: () => void;
  onThirtySecondsLeft?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  onComplete,
  onThirtySecondsLeft,
}) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetDateTime = new Date(targetDate).getTime();
    const difference = targetDateTime - now;

    if (difference > 0) {
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { minutes, seconds };
    } else {
      return { minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [alertTriggered, setAlertTriggered] = useState(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const newTimeLeft = calculateTimeLeft();
  //     setTimeLeft(newTimeLeft);

  //     if (!alertTriggered && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 30) {
  //       setAlertTriggered(true);
  //       onThirtySecondsLeft?.();
  //     }

  //     if (newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
  //       clearInterval(timer);
  //       onComplete(); // Call onComplete when the timer ends
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [targetDate]); // Restart effect when targetDate changes

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
  
      if (!alertTriggered && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 30) {
        setAlertTriggered(true);
        onThirtySecondsLeft?.();
      }
  
      if (newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
        onComplete(); // Call onComplete when the timer ends
      }
    }, 1000);
  
    return () => {
      clearInterval(timer); // Clear timer on unmount
    };
  }, [targetDate]);
  useEffect(() => {
    setAlertTriggered(false); // Reset alert trigger when the target time updates
  }, [targetDate]);

  const minuteString = String(timeLeft.minutes).padStart(2, "0");
  const secondString = String(timeLeft.seconds).padStart(2, "0");

  return (
    <View style={styles.container}>
      <View style={styles.timerBlock}>
        <Text style={styles.timerText}>{minuteString[0]}</Text>
      </View>
      <View style={styles.timerBlock}>
        <Text style={styles.timerText}>{minuteString[1]}</Text>
      </View>
      <View style={styles.timerBlock}>
        <Text style={styles.separator}>:</Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5,
  },
  timerBlock: {
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  timerText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  separator: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});

export default CountdownTimer;
