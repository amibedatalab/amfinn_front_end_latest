import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BuyMF = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [returnOnInvestment, setReturnOnInvestment] = useState('');

  const calculateReturn = () => {
    const roi = parseFloat(returnOnInvestment);
    const investment = parseFloat(investmentAmount);
    const futureValue = investment * Math.pow(1 + roi / 100, 5); // Assuming 5-year return
    alert(`Future Value of your investment: ₹${futureValue.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy Mutual Fund</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Investment Amount"
        keyboardType="numeric"
        value={investmentAmount}
        onChangeText={setInvestmentAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Expected Return (%)"
        keyboardType="numeric"
        value={returnOnInvestment}
        onChangeText={setReturnOnInvestment}
      />
      <TouchableOpacity onPress={calculateReturn} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Return</Text>
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

export default BuyMF;
