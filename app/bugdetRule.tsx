import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const budgetRules = [
  {
    id: '1',
    title: '50/30/20 Rule',
    description: '50% Needs, 30% Wants, 20% Savings',
    calculate: (amount) => ({
      Needs: (amount * 0.5).toFixed(2),
      Wants: (amount * 0.3).toFixed(2),
      Savings: (amount * 0.2).toFixed(2),
    }),
  },
  {
    id: '2',
    title: 'Zero-Based Budget',
    description: 'Every ₹ has a job. Income - Expenses = ₹0',
    calculate: (amount) => ({
      Allocated: amount,
      Remaining: 0,
    }),
  },
  {
    id: '3',
    title: '80/20 Rule',
    description: '80% Spend, 20% Save',
    calculate: (amount) => ({
      Spend: (amount * 0.8).toFixed(2),
      Save: (amount * 0.2).toFixed(2),
    }),
  },
  {
    id: '4',
    title: 'Custom Cap',
    description: 'Cap your spending in one category (e.g., ₹5,000 for dining)',
    calculate: (amount) => ({
      CapAmount: amount,
    }),
  },
];

const BudgetRule = () => {
  const [selectedRule, setSelectedRule] = useState(null);
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    if (!selectedRule || !amount) {
      alert('Please select a rule and enter an amount');
      return;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
      alert('Please enter a valid numeric amount');
      return;
    }

    const breakdown = selectedRule.calculate(numericAmount);
    setResult(breakdown);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select a Budget Rule</Text>

      <FlatList
        data={budgetRules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.ruleItem,
              selectedRule?.id === item.id && styles.selectedRule,
            ]}
            onPress={() => {
              setSelectedRule(item);
              setResult(null);
            }}
          >
            <Text style={styles.ruleTitle}>{item.title}</Text>
            <Text style={styles.ruleDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter amount (₹)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Apply Rule</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Result:</Text>
          {Object.entries(result).map(([key, value]) => (
            <Text key={key} style={styles.resultText}>
              {key}: ₹{value}
            </Text>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1fff5',
    paddingTop:80
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ruleItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedRule: {
    borderColor: '#00D09E',
    backgroundColor: '#e7fcf7',
  },
  ruleTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    fontFamily:'NotoSans'
  },
  ruleDescription: {
    fontSize: 14,
    color: '#555',
    fontFamily:'NotoSans'
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#00D09E',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#e6f9f5',
    borderRadius: 8,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007B6E',
  },
  resultText: {
    fontSize: 16,
    marginVertical: 2,
    color: '#333',
  },
});

export default BudgetRule;
