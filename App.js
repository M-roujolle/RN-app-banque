import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './src/Navigation/TabsNavigator';
import { Provider as PaperProvider, Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderComponent from './src/Components/HeaderComponent';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider style={{ flex: 1 }}>
        <View style={{flex: 1}} >
          <Provider>
          <HeaderComponent />
          <TabNavigator />
          <StatusBar style="auto" />
          </Provider>
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
