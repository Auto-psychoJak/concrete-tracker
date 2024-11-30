import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import JobCard from './JobCard';

interface Job {
  id: string;
  address: string;
  customer: string;
  date: string;
  paymentStatus: string;
}

const JobList: React.FC = () => {
  // Step 3: Add useState to manage jobs
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      address: '123 Main St',
      customer: 'John Doe',
      date: '2024-12-01',
      paymentStatus: 'Paid',
    },
    {
      id: '2',
      address: '456 Elm St',
      customer: 'Jane Smith',
      date: '2024-12-02',
      paymentStatus: 'Unpaid',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard
            address={item.address}
            customer={item.customer}
            date={item.date}
            paymentStatus={item.paymentStatus}
          />
        )}
      />
      {/* Placeholder button to add new jobs (this will be replaced by a form in a later step) */}
      <Button
        title="Add Job"
        onPress={() => {
          // Example of adding a new job (in real case, it will come from a form)
          setJobs((prevJobs) => [
            ...prevJobs,
            {
              id: (prevJobs.length + 1).toString(),
              address: '789 Oak St',
              customer: 'Alice Johnson',
              date: '2024-12-03',
              paymentStatus: 'Pending',
            },
          ]);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default JobList;
