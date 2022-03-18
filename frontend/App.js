import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Bible from './src/screens/Bible'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Bible/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C8FE2',
  },
});
