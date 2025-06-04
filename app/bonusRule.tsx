import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BonusRule = () => {
  const [salary, setSalary] = useState('');
  const [bonus, setBonus] = useState('');

  const calculateBonus = () => {
    const bonusAmount = (parseFloat(salary) * 0.1).toFixed(2); // 10% Bonus Example
    setBonus(bonusAmount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bonus Rule</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Salary"
        keyboardType="numeric"
        value={salary}
        onChangeText={setSalary}
      />
      <TouchableOpacity onPress={calculateBonus} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Bonus</Text>
      </TouchableOpacity>
      {bonus && (
        <Text style={styles.resultText}>Your Bonus: ₹{bonus}</Text>
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

export default BonusRule;
