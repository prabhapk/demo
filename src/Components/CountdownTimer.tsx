import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

interface CountdownTimerProps {
  targetDate: string;
  onComplete: () => void;
  onThirtySecondsLeft?: () => void; // New prop for notifying parent
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  onComplete,
  onThirtySecondsLeft,
}) => {
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
  const [alertTriggered, setAlertTriggered] = useState(false); // Prevent multiple calls

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Notify parent when reaching 30 seconds
      if (!alertTriggered && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 30) {
        setAlertTriggered(true);
        if (onThirtySecondsLeft) {
          onThirtySecondsLeft(); // Call parent function
        }
      }

      if (newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [alertTriggered]); // Depend on `alertTriggered` to trigger once

  // Convert numbers into two-digit strings
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
