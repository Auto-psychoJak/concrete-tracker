import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface JobCardProps {
  address: string;
  customer: string;
  date: string;
  paymentStatus: string;
}

const JobCard: React.FC<JobCardProps> = ({ address, customer, date, paymentStatus }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{address}</Text>
      <Text>Customer: {customer}</Text>
      <Text>Date: {date}</Text>
      <Text>Payment Status: {paymentStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default JobCard; // This line ensures JobCard is exported correctly
