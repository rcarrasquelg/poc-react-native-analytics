import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import auth from '@react-native-firebase/auth';

export const SignUp = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const createUser = (emailForm: string, passwordForm: string) => {
    auth()
      .createUserWithEmailAndPassword(emailForm, passwordForm)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('HomeScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
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
        onPress={() => createUser(email, password)}>
        <Text style={styles.buttonText}>Login Now</Text>
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
