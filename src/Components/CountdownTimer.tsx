import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

interface CountdownTimerProps {
  targetDate?: string;
  onComplete?: () => void;
  onThirtySecondsLeft?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  onComplete,
  onThirtySecondsLeft,
}) => {
  const isFocused = useIsFocused(); // Hook to detect screen focus

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

  useEffect(() => {
    if (!isFocused) return; // Do nothing if the screen is not focused

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!alertTriggered && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 30) {
        setAlertTriggered(true);
        onThirtySecondsLeft?.(); // Trigger the 30-second modal
      }

      if (newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
        onComplete?.(); // Optional complete callback
      }
    }, 1000);

    return () => {
      clearInterval(timer); // Clear timer when screen blurs or unmounts
    };
  }, [targetDate, isFocused]);

  useEffect(() => {
    setAlertTriggered(false); // Reset the 30s modal trigger when time resets
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
    paddingVertical: 8,
    paddingHorizontal: 8,
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
