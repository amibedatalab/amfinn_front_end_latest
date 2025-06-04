import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SIPReturn = () => {
  const [monthlyAmount, setMonthlyAmount] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState('');

  const calculateSIP = () => {
    const rate = parseFloat(rateOfReturn) / 100 / 12;
    const months = parseFloat(years) * 12;
    const principal = parseFloat(monthlyAmount) * months;
    const futureValue = principal * Math.pow(1 + rate, months);
    setResult(`Future Value of SIP: ₹${futureValue.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIP Return Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Monthly Investment"
        keyboardType="numeric"
        value={monthlyAmount}
        onChangeText={setMonthlyAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Expected Return (%)"
        keyboardType="numeric"
        value={rateOfReturn}
        onChangeText={setRateOfReturn}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Investment Duration (Years)"
        keyboardType="numeric"
        value={years}
        onChangeText={setYears}
      />
      <TouchableOpacity onPress={calculateSIP} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Return</Text>
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

export default SIPReturn;
