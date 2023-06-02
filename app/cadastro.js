import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} />
      <Text style={styles.titulo}>Doguinho</Text>
      <StatusBar style="auto" />
      <Text style={styles.paragraph}>
      Cadastro
      </Text>
      <Text style={styles.textologin}>
        Nome
      </Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.textologin}>
        Email
      </Text>
      <TextInput
        style={styles.input}
      />
        <Text style={styles.textologin}>
        Data de Nascimento
      </Text>
      <TextInput
        style={styles.input}
      />
        <Text style={styles.textologin}>
        CPF
      </Text>
      <TextInput
        style={styles.input}
      />
      <View style={styles.screenContainer}>
        <TouchableOpacity style={{ height: 40, width: 100, backgroundColor:'blue' , alignItems: 'center', borderRadius: 5}}>
        <Text style={{color: 'white', marginTop: 5, fontSize: 20}}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <Link style={{marginTop: 3, fontSize: 15, color: 'blue'}} href="/home">Voltar para Home</Link>
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
  paragraph: {
    margin: 24,
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  screenContainer: {
    justifyContent: "center",
    padding: 10
  },
  textologin: {
    color: '#000',
    marginLeft: 12,
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#000',
    borderRadius: 10,
    border: 'solid',
    width: 380,
    height: 45,
    fontSize: 20,
    margin: 12,
    padding: 10,
  },
  textoforgot: {
    fontSize: 16,
    marginBottom: 340,
    textAlign: 'center',
    marginTop: 15,
    color: '#c6cacd'

  }
});
