import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HundredTimes25Y = () => {
  const [investment, setInvestment] = useState('');
  const [result, setResult] = useState('');

  const calculateInvestment = () => {
    const targetAmount = parseFloat(investment) * 100;
    setResult(`Your investment will grow to ₹${targetAmount.toFixed(2)} in 25 years.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>100 Times in 25 Years</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Investment Amount"
        keyboardType="numeric"
        value={investment}
        onChangeText={setInvestment}
      />
      <TouchableOpacity onPress={calculateInvestment} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Growth</Text>
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

export default HundredTimes25Y;
