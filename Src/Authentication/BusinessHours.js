import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const daysOfWeek = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];

const timeSlots = [
  { slot: '8:00am - 10:00am' },
  { slot: '10:00am - 1:00pm' },
  { slot: '1:00pm - 4:00pm' },
  { slot: '4:00pm - 7:00pm' },
  { slot: '7:00pm - 10:00pm' },
];

const BusinessHours = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedSlots, setSelectedSlots] = useState([]);

  const toggleSlot = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter(item => item !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const getCurrentDay = () => {
    const today = new Date();
    const dayIndex = today.getDay();
    const dayMap = ['Su', 'M', 'T', 'W', 'Th', 'F', 'S'];
    return dayMap[dayIndex];
  };

  useEffect(() => {
    const currentDay = getCurrentDay();
    setSelectedDay(currentDay);
  }, []);

  const isDayDisabled = (day) => {
    const dayMap = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
    const currentDayIndex = dayMap.indexOf(getCurrentDay());
    const dayIndex = dayMap.indexOf(day);

    return dayIndex > currentDayIndex;
  };

  const Verification = () => {
    navigation.navigate('Complete');
  };

  const Backbutton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>FarmerEats</Text>
      <Text style={styles.steps}>Signup 4 of 4</Text>
      <Text style={styles.welcomeText}>Business Hours</Text>
      <Text style={styles.subtext}>
        Choose the hours your farm is open for pickups. This will allow customers to order deliveries.
      </Text>

      <View style={{ top: 20 }}>
        <View style={styles.daysContainer}>
          {daysOfWeek.map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayButton,
                day === selectedDay && styles.selectedDayButton,
                isDayDisabled(day) && styles.disabledDayButton
              ]}
              onPress={() => !isDayDisabled(day) && setSelectedDay(day)}
              disabled={isDayDisabled(day)}
            >
              <Text
                style={[
                  styles.dayText,
                  day === selectedDay && styles.selectedDayText,
                  isDayDisabled(day) && styles.disabledDayText
                ]}
              >
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.timeSlotsContainer}>
          {timeSlots.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlotButton,
                selectedSlots.includes(time.slot) && styles.selectedTimeSlot
              ]}
              onPress={() => toggleSlot(time.slot)}
            >
              <Text
                style={[
                  styles.timeSlotText,
                  selectedSlots.includes(time.slot) && styles.selectedTimeSlotText
                ]}
              >
                {time.slot}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={Backbutton}>
          <Icon name="long-arrow-left" size={45} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={Verification}>
          <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  steps: {
    fontSize: 14,
    fontWeight: '500',
  },
  appTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 40,
    textAlign: 'left',
    color: '#000000',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtext: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 20,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dayButton: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  selectedDayButton: {
    backgroundColor: '#D5715B',
  },
  disabledDayButton: {
    backgroundColor: '#F5F5F5',
  },
  dayText: {
    fontSize: 16,
    color: '#000000',
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  disabledDayText: {
    color: '#A9A9A9',
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlotButton: {
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    width: '48%',
    alignItems: 'center',
    backgroundColor: '#eeedec'
  },
  selectedTimeSlot: {
    backgroundColor: '#F8C569',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#000000',
  },
  selectedTimeSlotText: {
    color: '#261C12',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  loginButton: {
    backgroundColor: '#D5715B',
    borderRadius: 30,
    paddingVertical: 11,
    width: '60%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default BusinessHours;
