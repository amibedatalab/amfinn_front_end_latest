import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CAGRCalculator = () => {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [years, setYears] = useState('');
  const [cagr, setCagr] = useState('');

  const calculateCAGR = () => {
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);
    const time = parseFloat(years);

    const result = ((final / initial) ** (1 / time) - 1) * 100;
    setCagr(result.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAGR Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Initial Value"
        keyboardType="numeric"
        value={initialValue}
        onChangeText={setInitialValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Final Value"
        keyboardType="numeric"
        value={finalValue}
        onChangeText={setFinalValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Number of Years"
        keyboardType="numeric"
        value={years}
        onChangeText={setYears}
      />
      <TouchableOpacity onPress={calculateCAGR} style={styles.button}>
        <Text style={styles.buttonText}>Calculate CAGR</Text>
      </TouchableOpacity>
      {cagr && <Text style={styles.resultText}>CAGR: {cagr}%</Text>}
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

export default CAGRCalculator;
