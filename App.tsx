import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('');
  const [result, onChangeResult] = useState(0);

  return (
    <View>
      <Header/>
      
      <View style={styles.container}>
        <Input text={text} onChangeText={onChangeText}/>
        <Button title='Calcular' onPress={() => {
          Calcular({text, onChangeResult});
        }}/>
        
        <Text style={styles.textResult}>
          Resultado: 
          <Text style={{paddingLeft: 8, fontWeight: '700'}}>{result}</Text>
        </Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

function Header() {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>App Matemática</Text>
    </View>
  );
}

function Input({text, onChangeText}) {
  return (
    <View style={{width: '100%'}}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Informe seu cálculo'}
      />
    </View>
  )
}

function Calcular({text, onChangeResult}) {
  const valores: string[] = text.split('-');
  const resultado: number = Number(valores[0]) - Number(valores[1]);

  const valoresmais: string[] = text.split('+');
  const resultadomais: number = Number(valoresmais[0]) + Number(valoresmais[1]);
  if (resultado) {
    onChangeResult(resultado);
  } else if (resultadomais){
    onChangeResult(resultadomais)
  }

  const valoresvezes: string[] = text.split('*');
  const resultadovezes: number = Number(valoresvezes[0]) * Number(valoresvezes[1]);

  const valoresdividido: string[] = text.split('/');
  const resultadodividido: number = Number(valoresdividido[0]) / Number(valoresdividido[1]);
  if (resultadovezes) {
    onChangeResult(resultadovezes);
  } else if (resultadodividido){
    onChangeResult(resultadodividido)
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBox: {
    height: 60,
    backgroundColor: '#4867D7',
  },
  headerText: {
    padding: 15,
    fontSize: 20,
    color: '#fff'
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  textResult: {
    paddingTop: 40,
    fontSize: 20
  }
});