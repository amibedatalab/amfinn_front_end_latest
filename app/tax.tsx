import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Tax = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');

  const calculateTax = () => {
    let calculatedTax = 0;
    const annualIncome = parseFloat(income);

    if (annualIncome <= 250000) {
      calculatedTax = 0;
    } else if (annualIncome <= 500000) {
      calculatedTax = annualIncome * 0.05;
    } else if (annualIncome <= 1000000) {
      calculatedTax = annualIncome * 0.1;
    } else {
      calculatedTax = annualIncome * 0.2;
    }

    setTax(`Tax to be paid: ₹${calculatedTax.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tax Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Annual Income"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
      />
      <TouchableOpacity onPress={calculateTax} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Tax</Text>
      </TouchableOpacity>
      {tax && <Text style={styles.resultText}>{tax}</Text>}
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

export default Tax;
