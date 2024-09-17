import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ApplicationStack from './navigation/ApplicationStack';
import { UserDataProvider } from './context/UserDataContext';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UserDataProvider>
        <ApplicationStack>
        </ApplicationStack>
      </UserDataProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
