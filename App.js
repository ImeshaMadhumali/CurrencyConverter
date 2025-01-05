import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [lkr, setLkr] = useState('');
  const [usd, setUsd] = useState('');

  const converttousd = () => {
    const rate = 0.003; // Exchange rate: 1 LKR = 0.003 USD
    const converte = (parseFloat(lkr) * rate).toFixed(2); // Conversion logic
    setUsd(converte); // Update USD state
  };

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text variant="titleLarge" style={styles.title}>Curency Converter</Text>
          <Text>Welcome to Convert Currency!</Text>
          <StatusBar style="auto" />
          <TextInput
            mode='flat'
            label="Enter LKR Amount"
            value={lkr}
            onChangeText={setLkr}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button mode="contained" onPress={converttousd}>
          Convert To USD
          </Button>

          {usd && (
            <View style={styles.resultBox}>
              <Text style={styles.resultText}>Converted Amount:</Text>
              <Text style={styles.usdText}>{`$${usd}`}</Text>
            </View>
          )}
        </View>
      </SafeAreaProvider>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'gray'
  },
  resultBox: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFFFE0',
    borderRadius: 5,
    alignItems: 'center',
    width: '60%',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  usdText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  }
});
