
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';

const RegPage = () => {
  const [progress, setProgress] = useState(1);
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('male');

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const renderInputs = () => {
    switch (progress) {
      case 1:
        return (
          <View>
          <Text style={styles.text}> Enter your First Name </Text>
            <TextInput
              style={styles.input}
              placeholder="Sourabh"
              onChangeText={text => setFirstName(text)}
              value={firstName}
            />
            <Text style={styles.text}> Enter your Last Name </Text>
            <TextInput
              style={styles.input}
              placeholder="Mandal"
              onChangeText={text => setLastName(text)}
              value={lastName}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <Text style={styles.text}> Enter your Email Address </Text>
            <TextInput
              style={styles.emailinput}
              placeholder="sourabhkmandal@gmail.com"
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        );
        case 3:
        return (
          <View>
          <Text style={styles.text}> Enter your Age </Text>
            <TextInput
              style={styles.emailinput}
              placeholder="21"
              onChangeText={text => setAge(text)}
              value={age}
              keyboardType="numeric"
            />
          </View>
        );
        case 5:
        return (
          <View>
          <Text style={styles.text}> Enter Password </Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry
            />
            <Text style={styles.text}> Confirm Password </Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry
            />
          </View>
        );
      case 4:
        return (
          <View>
          <Text style={styles.text}> Select your Gender </Text>
         <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => handleGenderChange(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
          </View>
        );
     
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (progress < totalSteps) {
      setProgress(progress + 1);
    } else {
      navigation.navigate('HomePage');
    }
  };

  const totalSteps = 5; // Total number of steps/sets of input fields

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${(progress / totalSteps) * 100}%` }]} />
      </View>
      {renderInputs()}
      <View style={styles.nextButtonContainer}>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>{progress < totalSteps ? 'Next' : 'Submit'}</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9EAEA',
  },
  progressContainer: {
    height: 7,
    backgroundColor: '#e0e0e0',
    borderRadius: 2.5,
    marginTop:50,
    marginBottom: 40,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#999999', 
    borderRadius: 2.5,
  },
  nextButton: {
    backgroundColor: 'black', 
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: -450,
    marginLeft: 8,
    paddingHorizontal: 100,
    width: 330,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginBottom: 25,
  },
  text: {
    fontSize: 25,
  },
  emailinput: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginBottom: 125,
  },
  picker: {
    marginTop: -37,
  },
});

export default RegPage;

