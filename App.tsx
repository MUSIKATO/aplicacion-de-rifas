import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { RaffleScreen } from './src/screens/RaffleScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <RaffleScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1A',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 600, // Limitar el ancho máximo para vistas en tablets/web
    alignSelf: 'center', // Centrar el contenido si la pantalla es muy ancha
  }
});
