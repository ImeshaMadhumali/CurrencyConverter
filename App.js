import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [text, setText] = useState('');
  return (
    <PaperProvider>
      <SafeAreaProvider>
      <View style={styles.container}>
        <Text variant="titleLarge" style={styles.title}>Curency Converter</Text>
        <Text>Welcome to Convert Currency!</Text>
        <StatusBar style="auto" />
        <TextInput
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Convert
        </Button>
        
      </View>
      </SafeAreaProvider>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Arial',
    color: 'green',
    justifyContent: 'center',
  },
});
