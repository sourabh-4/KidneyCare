import React from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log('Button Pressed');
  };

  const handleSignInPress = () => {
    navigation.navigate('NewPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Header}>KidneyCare</Text>

      <Text style={styles.byText}>Manage your Kidney Health with ease and convenience</Text>

      <View style={styles.buttonContainer}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#333" 
        onPress={handlePress}
      >
        <View>
          <Text style={styles.buttonText}>Get Started!</Text>
        </View>
      </TouchableHighlight>
      </View>

      <View style={styles.footer}>
      <Text style={styles.footerText}>
      Already a member?
      </Text>
      <TouchableHighlight
        underlayColor="#DDDDDD"
        onPress={handleSignInPress}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableHighlight>
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
    backgroundColor: '#f0f8ff',
  },
  Header: {
    fontWeight: '300', 
    fontSize: 50,       
    marginTop: -375,
    color: '#444444',
  },
  byText: {
    fontSize:17.5,
    marginRight: 80,
    marginLeft: 80,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: '300',
  },
  buttonContainer: {
    position: 'absolute', 
    bottom: 75,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 110,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    marginRight: 10,
  },
  signInText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },

});
