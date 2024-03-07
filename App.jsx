import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import LoginButton from './src/Components/LoginButton';
import ExpedienteInput from './src/Components/ExpedienteInput';
import PasswordInput from './src/Components/PasswordInput';

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente.length !== 6) {
      Alert.alert("El expediente debe tener 6 caracteres");
    } else if (password.length < 8) {
      Alert.alert("El password debe ser mayor o igual a 8 caracteres");
    } else {
      Alert.alert("Login exitoso");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputsContainer}>
        <ExpedienteInput expediente={expediente} setExpediente={setExpediente}/>
        <PasswordInput password={password} setPassword={setPassword}/>
      </View>
      <LoginButton handleSubmit={handleSubmit}/>
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
  },
});  