import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CarBuyingRule = () => {
  const [carPrice, setCarPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanAmount, setLoanAmount] = useState('');

  const handleCalculate = () => {
    const calculatedLoan = parseFloat(carPrice) - parseFloat(downPayment);
    setLoanAmount(calculatedLoan.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Buying Rule</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car Price"
        keyboardType="numeric"
        value={carPrice}
        onChangeText={setCarPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Down Payment"
        keyboardType="numeric"
        value={downPayment}
        onChangeText={setDownPayment}
      />
      <TouchableOpacity onPress={handleCalculate} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Loan</Text>
      </TouchableOpacity>
      {loanAmount && (
        <Text style={styles.resultText}>Loan Amount: ₹{loanAmount}</Text>
      )}
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

export default CarBuyingRule;
