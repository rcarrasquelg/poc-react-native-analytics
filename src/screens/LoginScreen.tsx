import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (emailLogin: string, passwordLogion: string) => {
    auth()
      .signInWithEmailAndPassword(emailLogin, passwordLogion)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('HomeScreen');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TextInput
        style={styles.inputs}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.inputs}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => login(email, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    width: '60%',
    marginTop: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '60%',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
