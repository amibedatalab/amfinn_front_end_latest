import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HomeLoanRates = () => {
  const [rates, setRates] = useState([
    { bank: 'Bank A', rate: '6.7%' },
    { bank: 'Bank B', rate: '7.0%' },
    { bank: 'Bank C', rate: '6.9%' },
    { bank: 'Bank D', rate: '7.1%' },
    { bank: 'Bank E', rate: '6.8%' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Loan Rates</Text>
      <FlatList
        data={rates}
        keyExtractor={(item) => item.bank}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.bank}: {item.rate}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: '#444',
  },
});

export default HomeLoanRates;
