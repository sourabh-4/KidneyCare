import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';

const NewPage = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('HomePage');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password Pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.Header}>Sign In</Text>
        <TextInput
          style={styles.emailinput}
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.pswdinput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

      
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'flex-start',
  },
  Header: {
    fontWeight: '300',
    fontSize: 32,
    color: '#444444',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  emailinput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  pswdinput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  forgotPasswordButton: {
    paddingVertical: 12,
  },
  forgotPasswordText: {
    color: 'black', 
    fontSize: 12,
  },
});

export default NewPage;
