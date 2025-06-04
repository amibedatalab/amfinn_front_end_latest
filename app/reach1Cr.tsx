import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Reach1Cr = () => {
  const [monthlySaving, setMonthlySaving] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState('');

  const calculateSavings = () => {
    const targetAmount = 10000000; // ₹1 Cr
    const months = parseFloat(years) * 12;
    const savingPerMonth = targetAmount / months;

    setResult(`You need to save ₹${savingPerMonth.toFixed(2)} monthly to reach ₹1 Cr.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reach ₹1 Cr</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Years to Save"
        keyboardType="numeric"
        value={years}
        onChangeText={setYears}
      />
      <TouchableOpacity onPress={calculateSavings} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Savings</Text>
      </TouchableOpacity>
      {result && <Text style={styles.resultText}>{result}</Text>}
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#00D09E',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00D09E',
  },
});

export default Reach1Cr;
