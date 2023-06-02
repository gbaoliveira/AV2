import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} />
      <Text style={styles.titulo}>Doguinho</Text>
      <Text style={styles.texto}>Nós da doguinho trabalhamos a quase 11 anos para o seu pet!{'\n'}
      Temos rações, medicamentos, guias, ajudas, brinquedos, de tudo mesmo!{'\n'}Nosso número de suporte é 48 936523-3432562, Também temos um{'\n'}email 
      de contato: doguinhosuporte@gmail.com</Text>
      <Link style={{marginTop: 15, fontSize: 15, color: 'blue'}} href="/">Voltar para Index</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 20,
    marginTop: 10,
  }
});
