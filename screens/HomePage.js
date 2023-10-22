import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Image, setScrollHeight } from 'react-native';

const HomePage = () => {
  const navigation = useNavigation();

  const handleBook = () => {
    console.log("Pressed Book!")
  };
  const handleMedication = () => {
    console.log("Pressed Medication!")
  };
  const handleHealth = () => {
    console.log("Pressed Health!")
  };
  const handleResources = () => {
    console.log("Pressed Resources!")
  };
  const handleDoctor = () => {
    console.log("Pressed AI Doc!")
  };
  const handleInsurance = () => {
    console.log("Pressed Insurance!")
  };
  const handleCab = () => {
    console.log("Pressed Cab!")
  };
  const handleHome = () => {
    navigation.navigate('HomePage')
  };
  const handleProfile = () => {
    navigation.navigate('Profile')
  };
  const handleCalendar = () => {
    console.log("Pressed Calendar!")
  };

  return (
    <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>

          Welcome to KidneyCare, Sourabh!
        </Text>  
        </View>
      <View style={styles.card}>
        <View style={styles.innercard}>
          <Image source={require('../Images/Kidney.png')} style={styles.KidneyImage} />
        </View>
        
        <Text style={styles.cardHeader}>
        Book your treatment </Text>
        
        <Text style={styles.cardheader2}>
        Location</Text>


        <Text style={styles.cardtext}>
        Powai, Mumbai</Text>

        <TouchableOpacity style={styles.button} onPress={handleBook}>
            <Text style={styles.buttonText}>Book</Text>
          </TouchableOpacity>

      </View>

      <View style={styles.card2}>

      <Text style={styles.cardHeader}>
      Manage your Health
      </Text>

      <TouchableOpacity style={styles.buttonContainer1} onPress={handleMedication}>
      <View style={styles.card3}>
      <View style={styles.buttonIconContainer}>
    <Image source={require('../Images/medication.png')} style={styles.buttonIcon} />
  </View>
      </View> 
      <View style={styles.textContainer}>
      <Text style={styles.buttonText2}>Manage</Text>
      <Text style={styles.buttonText2}>Medications</Text>
      </View>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.buttonContainer2} onPress={handleHealth}>
      <View style={styles.card3}>
      <View style={styles.buttonIconContainer}>
    <Image source={require('../Images/medication.png')} style={styles.buttonIcon} />
  </View>
      </View> 
      <View style={styles.textContainer}>
      <Text style={styles.buttonText2}>Health</Text>
      <Text style={styles.buttonText2}>Data</Text>
      </View>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.buttonContainer3} onPress={handleResources}>
      <View style={styles.card3}>
      <View style={styles.buttonIconContainer}>
    <Image source={require('../Images/Resources.png')} style={styles.buttonIcon} />
  </View>
      </View>  
      <View style={styles.textContainer}>
      <Text style={styles.buttonText2}>Useful</Text>
      <Text style={styles.buttonText2}>Resources</Text>
      </View>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.buttonContainer4} onPress={handleDoctor}>
      <View style={styles.card3}>
      <View style={styles.buttonIconContainer}>
    <Image source={require('../Images/medication.png')} style={styles.buttonIcon} />
  </View>
      </View> 
      <View style={styles.textContainer}>
      <Text style={styles.buttonText2}>AI</Text>
      <Text style={styles.buttonText2}>Doctor</Text>
      </View>
    </TouchableOpacity>


    <Text style={styles.cardHeader3}>
      Manage your Appointment
      </Text>

      <TouchableOpacity style={styles.buttonContainer5} onPress={handleInsurance}>
      <View style={styles.card3}>
      <View style={styles.buttonIconContainer}>
    <Image source={require('../Images/Insurance.png')} style={styles.buttonIcon} />
  </View>
      </View>  
      <View style={styles.textContainer}>
      <Text style={styles.buttonText2}>Health</Text>
      <Text style={styles.buttonText2}>Insurance</Text>
      </View>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.buttonContainer6} onPress={handleCab}>
      <View style={styles.card3}>
      <View style={styles.buttonIconContainer}>
    <Image source={require('../Images/CabServices.png')} style={styles.buttonIcon} />
  </View>
      </View> 
      <View style={styles.textContainer}>
      <Text style={styles.buttonText2}>Cab</Text>
      <Text style={styles.buttonText2}>Services</Text>
      </View>
    </TouchableOpacity>

        </View>
          </ScrollView>  
          <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={handleHome}>
          <View style={styles.footerbuttoncontainer}>
          <Image source={require('../Images/Home.png')} style={styles.footerButtonImageHome} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleCalendar}>
        <View style={styles.footerbuttoncontainer}>
          <Image source={require('../Images/Calendar.png')} style={styles.footerButtonImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleBook}>
        <View style={styles.footerbuttoncontainer}>
          <Image source={require('../Images/Book.png')} style={styles.footerButtonImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleProfile}>
        <View style={styles.footerbuttoncontainer}>
          <Image source={require('../Images/Profile.png')} style={styles.footerButtonImage} />
          </View>
        </TouchableOpacity>
      </View> 
          </View>   
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E9EAEA',
  },
  container: {
    flex: 1,
    backgroundColor: '#E9EAEA',
    justifyContent: 'center',
    alignItems: 'center',
    flexgrow: 1,
    paddingVertical: 20,
  },
  Header: {
    fontSize: 27,
    fontWeight: '600',
    textAlign: 'center', 
    position: 'absolute',
    top: 90,
  },
  KidneyImage: {
    position: 'absolute',
    top: -20,
    left: 60,
    height: 200,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'flex-start',
    width: '90%',
    position: 'absolute',
    top: 150,
    alignItems: 'center',
    height: 240,
  },
  innercard: {
    backgroundColor: '#E9EAEA',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    elevation: 0,
    alignItems: 'flex-start',
    height: 125,
    width: '100%',
  },
  cardHeader:{
    marginLeft: -110,
    padding: 10,
    fontSize: 23,
    fontWeight: '600',
  },
  cardheader2: {
    fontSize: 20,
    marginLeft: -225,
    padding:2,
    fontWeight: '500',
  },
  cardtext:{
    fontSize: 14,
    marginLeft: -200,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#DADADA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    top: 175,
    right: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  card2: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'flex-start',
    width: '90%',
    position: 'absolute',
    top: 420,
    alignItems: 'center',
    height: 345,
  },
   buttonContainer1: {
    flexDirection:'row',
    position: 'absolute',
    top: 60,
    left: 25,
    alignItems: 'left',
    padding: 15,
    borderWidth: 0,
    borderColor: 'left',
    height: 50,
    width: 130,
  },
  buttonContainer2: {
    flexDirection:'row',
    position: 'absolute',
    top: 60,
    right: 25,
    alignItems: 'left',
    padding: 15,
    borderWidth: 0,
    borderColor: 'black', 
    height: 50,
    width: 130,
  },
  buttonContainer3: {
    flexDirection:'row',
    position: 'absolute',
    top: 150,
    left: 25,
    alignItems: 'left',
    padding: 15,
    borderWidth: 0,
    borderColor: 'black',
    height: 50,
    width: 130, 
    marginTop: -10,
  },
  buttonContainer4: {
  flexDirection:'row',
    position: 'absolute',
    top: 150,
    right: 25,
    alignItems: 'left',
    padding: 15,
    borderWidth: 0,
    borderColor: 'black', 
    height: 50,
    width: 130,
    marginTop: -10,
  },
  buttonContainer5: {
  flexDirection:'row',
    position: 'absolute',
    top: 270,
    left: 25,
    alignItems: 'left',
    padding: 15,
    borderWidth: 0,
    borderColor: 'black', 
    height: 50,
    width: 130,
    marginTop: -10,
  },
  buttonContainer6: {
  flexDirection:'row',
    position: 'absolute',
    top: 270,
    right: 25,
    alignItems: 'left',
    padding: 15,
    borderWidth: 0,
    borderColor: 'black', 
    height: 50,
    width: 130,
    marginTop: -10,
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
  buttonText2: {
    marginTop: 0,
    fontSize: 13.5,
    fontWeight:'600',
  },
  textContainer: {
    flexDirection: 'column',
  },
  buttonIconContainer: {
  borderWidth: 5,
  borderRadius: 7,
  padding: 0,
  borderColor: '#ebebeb',
  marginRight: 10,
},
  cardHeader3:{
    top: 210,
    left: 10,
    padding: 10,
    fontSize: 23,
    fontWeight: '600',
    position: 'absolute',

  },
  footer: {
    backgroundColor: '#f0f0f0',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
   footerButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  footerButtonImage: {
    width: 30,
    height: 30,
  },
  footerButtonImageHome: {
    width: 32,
    height: 32,
  },
  footerbuttoncontainer: {
    borderWidth: 5,
  borderRadius: 7,
  padding: 0,
  borderColor: '#f0f0f0',
  marginRight: 10,
  },
  HeaderContainer: {
    position: 'absolute',
    top: 20,
    left: 5,
  }
});

export default HomePage;
