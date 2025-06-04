import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkInProgress = () => (
  <View style={styles.container}>
    <Text style={styles.text}>🚧 Work in Progress 🚧</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
  },
});

export default WorkInProgress;
