import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{height: 150, width: 150}} source={require('../assets/icon.png')} />
      <Text style={styles.titulo}>Doguinho</Text>
      <Link style={{marginTop: 15, fontSize: 15, color: 'blue'}} href="/cadastro">Ir para o Cadastro</Link>
    <View style={styles.imagens}>
      <View style={styles.item}>
        <Image style={{height: 150, width: 150}} source={require('../assets/img1.png')} />
        <Image style={{height: 150, width: 150}} source={require('../assets/img2.png')} />  
        <Image style={{height: 150, width: 150}} source={require('../assets/img3.png')} />
        <Image style={{height: 150, width: 150}} source={require('../assets/img4.png')} />
      </View>
      <View style={styles.item}>
         <Image style={{height: 150, width: 150}} source={require('../assets/img5.png')} />
        <Image style={{height: 150, width: 150}} source={require('../assets/img6.png')} />
        <Image style={{height: 150, width: 150}} source={require('../assets/img7.png')} />
        <Image style={{height: 150, width: 150}} source={require('../assets/img8.png')} />
      </View>
    </View>
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
  },
  imagens: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' 
  },
});
