import * as colors from '../styles/Colors';

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Scale from './Scale';
import moment from 'moment';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  onComplete: () => void;
}

const calculateTimeLeft = (date: string): TimeLeft => {
  const difference = moment(date).diff(moment());
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  onComplete,
}) => {
 
  const difference = targetDate?.getTime() - new Date().getTime();

  const calculateTimeLeft = () => {
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {days, hours, minutes, seconds};
    } else {
      return {days: 0, hours: 0, minutes: 0, seconds: 0};
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return timeLeft.days > 0 ||
    timeLeft.hours > 0 ||
    timeLeft.minutes > 0 ||
    timeLeft.seconds > 0 ? (
    <View style={styles.container}>
      <Text style={styles.label}>Closes in</Text>
      <View style={styles.timerContainer}>
        <TimeComponent value={timeLeft.days} label="Days" />
        <Text style={styles.separator}>:</Text>
        <TimeComponent value={timeLeft.hours} label="Hrs" />
        <Text style={styles.separator}>:</Text>
        <TimeComponent value={timeLeft.minutes} label="Mins" />
        <Text style={styles.separator}>:</Text>
        <TimeComponent value={timeLeft.seconds} label="Secs" />
      </View>
    </View>
  ) : (
    <></>
  );
};

interface TimeComponentProps {
  value: number;
  label: string;
}

const TimeComponent: React.FC<TimeComponentProps> = ({value, label}) => (
  <View style={styles.timeComponent}>
    <Text style={styles.timeValue}>{value}</Text>
    <Text style={styles.timeLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    padding: Scale(20),
    borderRadius: Scale(10),
    top: Scale(30),
    borderColor: colors.red,
    borderWidth: Scale(1),
    alignItems: 'center',
   
  },
  label: {
    color: colors.red,
    fontSize: Scale(15),
    marginBottom: Scale(10),
    marginHorizontal: Scale(30),
    fontWeight: '600',
    textAlign: 'center',
    marginTop: Scale(10),
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Scale(30),
    marginTop: Scale(10),
  },
  timeComponent: {
    alignItems: 'center',
    marginBottom: Scale(50),
  },
  timeValue: {
    color: colors.red,
    fontSize: Scale(24),
    fontWeight: '600',
  },
  timeLabel: {
    color: colors.red,
    fontSize: Scale(16),
    fontWeight: '600',
  },
  separator: {
    color: colors.red,
    fontSize: Scale(24),
    marginHorizontal: Scale(15),
    bottom: Scale(10),
  },
});

export default CountdownTimer;
