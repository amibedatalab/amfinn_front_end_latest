import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TermPlan = () => {
  const [age, setAge] = useState('');
  const [sumAssured, setSumAssured] = useState('');
  const [premium, setPremium] = useState('');

  const calculatePremium = () => {
    const calculatedPremium = parseInt(sumAssured) * 0.02 + parseInt(age) * 0.03;
    setPremium(`Estimated Premium: ₹${calculatedPremium.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Term Plan Insurance</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Sum Assured (₹)"
        keyboardType="numeric"
        value={sumAssured}
        onChangeText={setSumAssured}
      />
      <TouchableOpacity onPress={calculatePremium} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Premium</Text>
      </TouchableOpacity>
      {premium && <Text style={styles.resultText}>{premium}</Text>}
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

export default TermPlan;
