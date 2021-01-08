//import system
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();
//import other files
import GlobalState from './contexts/GlobalState'; 
import ProfileScreen from './Profile'; 
import RegisterScreen from './Register'; 
import LoginScreen from './Login';
import settingsScreen from './Settings';
import MapScreen from './Map';
//import assets
import logo from './assets/imgs/logo.gif'; 

//Font thing
import { useFonts } from 'expo-font';
import { setCustomText } from 'react-native-global-props';
const customTextProps = { 
  style: { 
    //fontFamily: 'Avatar',
  }
}
setCustomText(customTextProps);







//Homescreen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {'\n'}Avatar Games
        </Text>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.menu}>
        <View style={styles.submenu}>
          <Text style={styles.menutext} >
            Use the Login or Register button below to start{'\n'}{'\n'}
          </Text>
        
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.license}> Created by Luna and Soul</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}







//App and menu
export default function App() {
  
  const [state, setState] = useState({}); 


  //Fonts
  let [fontsLoaded] = useFonts({
    //'Avatar': require('./assets/fonts/avatar.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {


    
    return (
      <GlobalState.Provider value={[state, setState]}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home' }}
            />

            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ title: 'Profile' }}
            />

            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ title: 'Login' }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ title: 'Register' }}
            />

            <Stack.Screen
              name="settingsScreen"
              component={settingsScreen}
              options={{ title: 'Settings' }}
            />

            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ title: 'Map' }}
            />
          </Stack.Navigator>
          
        </NavigationContainer>
      </GlobalState.Provider>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#443737',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
  },
  menu: {
    backgroundColor: "#888",
    alignItems: "stretch",
    height: 500,
    width: 380,
  },
  submenu: {
    backgroundColor: 'brown',
    marginTop: 5,
    alignItems: 'center',
  },
  bottom: {
    position: "absolute",
    top: 400,
    width:380,
    backgroundColor: "grey"
  },

  logo: {
    width: 170,
    height: 160,
    marginTop: 10,
  },
  menutext: {
    color: '#888',
    fontSize: 15,
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#443737",
    padding: 20,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  title: {
    color: '#000000', 
    fontSize: 40,
 
  },
  license: {
    
  },

});
