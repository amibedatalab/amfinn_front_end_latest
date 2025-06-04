import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CarInsurance = () => {
  const [carValue, setCarValue] = useState('');
  const [carAge, setCarAge] = useState('');
  const [insurancePremium, setInsurancePremium] = useState('');

  const calculatePremium = () => {
    const calculatedPremium = parseFloat(carValue) * 0.02 - parseFloat(carAge) * 0.01;
    setInsurancePremium(`Estimated Premium: ₹${calculatedPremium.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Insurance</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car Value (₹)"
        keyboardType="numeric"
        value={carValue}
        onChangeText={setCarValue}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Car Age (Years)"
        keyboardType="numeric"
        value={carAge}
        onChangeText={setCarAge}
      />
      <TouchableOpacity onPress={calculatePremium} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Premium</Text>
      </TouchableOpacity>
      {insurancePremium && <Text style={styles.resultText}>{insurancePremium}</Text>}
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

export default CarInsurance;
