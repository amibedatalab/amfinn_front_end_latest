import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CoupleBudgetRule = () => {
  const [personOneAmount, setPersonOneAmount] = useState('');
  const [personTwoAmount, setPersonTwoAmount] = useState('');

  const handleSubmit = () => {
    console.log(`Person 1 Budget: ₹${personOneAmount}, Person 2 Budget: ₹${personTwoAmount}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Couple Budget Rule</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Person 1 Amount"
        keyboardType="numeric"
        value={personOneAmount}
        onChangeText={setPersonOneAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Person 2 Amount"
        keyboardType="numeric"
        value={personTwoAmount}
        onChangeText={setPersonTwoAmount}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Apply Rule</Text>
      </TouchableOpacity>
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
});

export default CoupleBudgetRule;
