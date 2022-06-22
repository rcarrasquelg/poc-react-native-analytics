import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export const Home = ({navigation}: any) => {
  const signup = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('LoginScreen');
      });
  };

  return (
    <View style={styles.container}>
      <Text>UserEmail: {auth().currentUser?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={signup}>
        <Text style={styles.buttonText}>Close session</Text>
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
  button: {
    width: '60%',
    marginTop: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
