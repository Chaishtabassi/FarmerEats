import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Homescreen = () => {
  const data = [
    { title: 'Total Users', count: 150 },
    { title: 'Active Orders', count: 25 },
    { title: 'Pending Requests', count: 5 },
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.count}>{item.count}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 24,
    color: '#3498db',
  },
});

export default Homescreen;
