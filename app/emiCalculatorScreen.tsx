import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const { width: screenWidth } = Dimensions.get('window');

const EMICalculatorScreen = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(tenure) * 12;

    if (!principal || !rate || !time) return;

    const emiCalc =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);

    const totalPay = emiCalc * time;
    const interest = totalPay - principal;

    setEmi(parseFloat(emiCalc.toFixed(2)));
    setTotalInterest(parseFloat(interest.toFixed(2)));
    setTotalPayment(parseFloat(totalPay.toFixed(2)));
  };

  const principal = parseFloat(loanAmount);
  const interest = totalInterest ?? 0;

  const showChart = !isNaN(principal) && !isNaN(interest) && principal > 0 && interest > 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>EMI Calculator</Text>

      <Text style={styles.label}>Loan Amount (₹)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter loan amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
      />

      <Text style={styles.label}>Interest Rate (%)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter interest rate"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
      />

      <Text style={styles.label}>Loan Tenure (Years)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter tenure"
        keyboardType="numeric"
        value={tenure}
        onChangeText={setTenure}
      />

      <TouchableOpacity style={styles.button} onPress={calculateEMI}>
        <Text style={styles.buttonText}>Calculate EMI</Text>
      </TouchableOpacity>

      {emi !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Monthly EMI: ₹{emi}</Text>
          <Text style={styles.resultText}>Total Interest: ₹{totalInterest}</Text>
          <Text style={styles.resultText}>Total Payment: ₹{totalPayment}</Text>

          {/* {showChart && (
            <PieChart
              data={[
                {
                  name: 'Principal',
                  amount: principal,
                //   color: '#00D09E',
                  legendFontColor: '#093030',
                  legendFontSize: 14,
                },
                {
                  name: 'Interest',
                  amount: interest,
                //   color: '#FF6B6B',
                  legendFontColor: '#093030',
                  legendFontSize: 14,
                },
              ]}
              width={screenWidth - 48}
              height={220}
              accessor="amount"
              backgroundColor="transparent"
              paddingLeft="15"
              center={[10, 0]}
              absolute
            />
          )} */}
        </View>
      )}
    </ScrollView>
  );
};

export default EMICalculatorScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#F1FFF3',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#093030',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#031314',
  },
  input: {
    backgroundColor: '#DFF7E2',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#00D09E',
    marginTop: 24,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#093030',
    fontSize: 18,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
});
