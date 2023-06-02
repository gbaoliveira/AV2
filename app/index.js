import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} />
      <Text style={styles.titulo}>Doguinho</Text>
      <Text style={styles.texto}>Um aplicativo para cuidar do seu cachorro! {'\n'}aqui na doguinho você vai encontrar todo{'\n'}tipo de ajuda para o seu pet, basta ir par a aba de{'\n'}
      cadastro e criar uma conta.</Text>
      <Text style={{marginTop: 20, fontSize: 15,}}>Saiba mais no nosso Sobre:</Text>
      <Link style={{marginTop: 15, fontSize: 15, color: 'blue'}} href="/sobre">Ir para Sobre</Link>
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
  image: {
    width: 180,
    marginTop: 15,
},
  texto: {
    fontSize: 20,
    marginTop: 10,
  }
});
