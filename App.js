import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView></SafeAreaView>
      <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Curency Converter</Text>
        <Text>Welcome to Convert Currency!</Text>
        <StatusBar style="auto" />
      </View>
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
