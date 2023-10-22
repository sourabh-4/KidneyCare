import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Image, setScrollHeight } from 'react-native';


const Profile = () => {
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
  const handleSignIn = () => {
    navigation.navigate('HomeScreen')
  };

  return (
    <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>
          Hello Sourabh!
        </Text>

        <View style={styles.PicContainer}>
        <Image source={require('../Images/ProfilePic.png')} style={styles.ProfilePic} />
        </View>
        </View>  
      <View style={styles.card}>
        <View style={styles.HeaderContainer}>
        <Text style={styles.cardHeader}> Basic Info </Text>
        </View>
        
        <View style={styles.infocontainer}>
        <Text style={styles.title}>
        Email Address </Text>
        <Text style={styles.value}>
        sourabhkmandal@gmail.com </Text>


        
        <Text style={styles.title}>
        Age</Text>
        <Text style={styles.value}>
        21 </Text>

        <Text style={styles.title}>
        Gender</Text>
        <Text style={styles.value}>
        Male </Text>
        </View>
      </View>

      <View style={styles.card3}>
        <View style={styles.HeaderContainer}>
        <Text style={styles.cardHeader}> Health Info </Text>
        </View>
        
        <View style={styles.infocontainer}>
        <Text style={styles.title2}>
        Weight </Text>
        <Text style={styles.value2}>
        55 kg </Text>


        
        <Text style={styles.title2}>
        Height</Text>
        <Text style={styles.value2}>
        153 cm </Text>

        <Text style={styles.title2}>
        BMI</Text>
        <Text style={styles.value2}>
        23.5 </Text>
        </View>
      </View>

      <View style={styles.logoutbutton}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Log Out</Text>
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
  PicContainer: {
    position: 'absolute',
    top: -341,
    right: -170,
  },
  Header: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center', 
    position: 'absolute',
    top: -340,
    marginLeft: -170,
  },
  HeaderContainer: {
    flexDirection: 'row',
  },
  ProfilePic: {
    width: 40,
    height: 40,
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
    top: 140,
    alignItems: 'center',
    height: 280,
  },
  card3: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'flex-start',
    width: '90%',
    position: 'absolute',
    top: 435,
    alignItems: 'center',
    height: 280,
  },
  cardHeader:{
    marginLeft: -170,
    padding: 10,
    fontSize: 30,
    fontWeight: '600',
  },
  cardHeader2: {
    fontSize: 30,
    marginLeft: -68,
    padding:2,
    fontWeight: '600',
  },

  button: {
    position: 'absolute',
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    top: 175,
    right: 20,
  },
  buttonText: {
    color: 'white',
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
    top: 490,
    alignItems: 'center',
    height: 365,
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
  title: {
    marginLeft: -75,
    padding: 10,
    fontSize: 23,
    fontWeight: '600',
  },
  value: {
    marginLeft: -55,
    fontSize: 20,
    fontWeight: '300',
  },
  infocontainer: {
    alignItems: 'left',
  },
  title2: {
    marginLeft: -155,
    padding: 10,
    fontSize: 23,
    fontWeight: '600',
  },
  value2: {
    marginLeft: -135,
    fontSize: 20,
    fontWeight: '300',
  },
  logoutbutton: {
    position: 'absolute',
    top: 550,
    right: 5,
  },
});

export default Profile;
