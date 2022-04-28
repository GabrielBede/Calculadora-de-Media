import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';


export default function App() {
  
  const [nome, setNome] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');

  function enviaInfo (){
    const nomeAtrib = nome;
        alert ('Salve '+nomeAtrib+', sua média é: ' +((parseInt(n1) + parseInt(n2))/2));
  }

  return (
    <View style={styles.container}>

      <Text style={styles.Text}>Calcule sua média:</Text>
      
      <TextInput style = {styles.campo} value = {nome} placeholder = 'Digite seu nome' onChangeText = {(nome) => setNome (nome)}/>


      <TextInput style = {styles.campo} keyboardType= "numeric" maxLength={4} placeholder= "Nota 1" 
      value={n1} onChangeText={(int) => setN1(int)}/>


      <TextInput style = {styles.campo} keyboardType= "numeric" maxLength={4} placeholder= "Nota 2" 
      value={n2} onChangeText={(int) => setN2(int)}/>

      <TouchableOpacity style = {styles.botao} onPress = {enviaInfo} >
      <Text style = {styles.botao}>Calcular a média</Text>
      </TouchableOpacity>


    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#191919',
    padding: 8,
  },
  
  
Text: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },

campo: {
  backgroundColor: '#fff',
  padding: 8,
  borderRadius: 25,
  marginBottom: 20,
  paddingLeft: 30,
  fontSize: 15,

},

botao: {
  backgroundColor: "#007EA7",
  padding: 6,
  textAlign: "center",
  borderRadius: 25,
  fontSize: 15,
  fontWeight: 'bold',
}

});