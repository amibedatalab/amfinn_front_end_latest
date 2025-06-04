import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const TABS = ['Estimate Networth', 'Current Networth', 'Calculator'];

const TILE_DATA = {
  'Estimate Networth': [
    { icon: 'calculator-outline', label: 'Budget Rule', screen: 'bugdetRule' },
    { icon: 'people-outline', label: 'Couple Budget Rule', screen: 'coupleBudgetRule' },
    { icon: 'gift-outline', label: 'Bonus Rule', screen: 'bonusRule' },
    { icon: 'cash-outline', label: 'Top 5 FD Rate', screen: 'Top5FDRateScreen' },
    { icon: 'home-outline', label: 'Home Loan Rate', screen: 'homeLoan' },
    { icon: 'car-outline', label: 'CAR Buying Rule', screen: 'carBuy' },
    { icon: 'rocket-outline', label: 'Reach 1 Cr', screen: 'Reach1CrScreen' },
    { icon: 'trending-up-outline', label: '100 Times in 25Y', screen: '100Times25YScreen' },
    { icon: 'document-text-outline', label: 'Tax', screen: 'TaxScreen' },
  ],
  'Current Networth': [
    { icon: 'cash-outline', label: 'Buy MF', screen: 'BuyMFScreen' },
    { icon: 'trending-up-outline', label: 'Buy Stock', screen: 'BuyStockScreen' },
    { icon: 'logo-bitcoin', label: 'Buy Gold', screen: 'BuyGoldScreen' },
    { icon: 'shield-checkmark-outline', label: 'Term Insurance', screen: 'TermInsuranceScreen' },
    { icon: 'medkit-outline', label: 'Health Insurance', screen: 'HealthInsuranceScreen' },
    { icon: 'car-outline', label: 'Car Insurance', screen: 'CarInsuranceScreen' },
    { icon: 'card-outline', label: 'Car Loan', screen: 'CarLoanScreen' },
    { icon: 'home-outline', label: 'Home Loan', screen: 'HomeLoanScreen' },
    { icon: 'wallet-outline', label: 'Personal Loan', screen: 'PersonalLoanScreen' },
  ],
  'Calculator': [
    { icon: 'calculator-outline', label: 'Term Plan', screen: 'TermPlanScreen' },
    { icon: 'medkit-outline', label: 'Health Plan', screen: 'HealthPlanScreen' },
    { icon: 'car-outline', label: 'Car Insurance', screen: 'CarInsuranceScreen' },
    { icon: 'stats-chart-outline', label: 'Sensex Return', screen: 'SensexReturnScreen' },
    { icon: 'logo-bitcoin', label: 'Gold Return', screen: 'GoldReturnScreen' },
    { icon: 'analytics-outline', label: 'SIP Return', screen: 'SIPReturnScreen' },
    { icon: 'trending-up-outline', label: 'CAGR Calculator', screen: 'CAGRCalculatorScreen' },
    { icon: 'calculator-outline', label: 'Financial Calc', screen: 'FinancialCalcScreen' },
    { icon: 'cash-outline', label: 'EMI Calculator', screen: 'EMICalculatorScreen' },
  ],
};

const Tile = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.tile} onPress={onPress}>
    <Icon name={icon} size={26} color="#000" />
    <Text style={styles.tileLabel}>{label}</Text>
  </TouchableOpacity>
);

const NetworthTilesScreen = () => {
  const [activeTab, setActiveTab] = useState('Calculator');
  const navigation = useNavigation();

  // Navigate to specific screen based on screen name from data
  const handleTilePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>
              {tab}
            </Text>
            {activeTab === tab ? <View style={styles.underline} /> : null}
          </TouchableOpacity>
        ))}
      </View>

      {/* Tiles */}
      <FlatList
        data={TILE_DATA[activeTab]}
        numColumns={3}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <Tile
            icon={item.icon}
            label={item.label}
            onPress={() => handleTilePress(item.screen)} // Use the screen value for navigation
          />
        )}
        contentContainerStyle={[styles.tileGrid, { paddingBottom: 0 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    backgroundColor: '#DFF7E2',
    height: 60,
    alignItems: 'center',
    borderRadius: 24,
  },
  tab: {
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: '#444',
  },
  tabText: {
    color: '#555',
    fontWeight: '400',
    fontFamily: 'NotoSans',
  },
  activeTabText: {
    color: '#00D09E',
    fontWeight: 'bold',
    fontFamily: 'NotoSans',
  },
  underline: {
    marginTop: 4,
    height: 2,
    backgroundColor: '#00D09E',
    width: '100%',
    borderRadius: 1,
  },
  tileGrid: {
    gap: 5,
  },
  tile: {
    backgroundColor: '#00D09E',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    flex: 1,
    minWidth: 100,
    elevation: 3,
    fontFamily: 'NotoSans',
  },
  tileLabel: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'NotoSans',
  },
});

export default NetworthTilesScreen;
