//import system
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();
//import assets
import logo from './assets/imgs/logo.gif'; 
import googlelogin from './assets/imgs/google-icon.png';
import facebooklogin from './assets/imgs/facebook-icon.png';
import discordlogin from './assets/imgs/discord-icon.webp'; 
//Font thing
import { useFonts } from 'expo-font';

import { setCustomText } from 'react-native-global-props';
import { State } from 'react-native-gesture-handler';
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

//Profile Screen
function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}






function doLogin({}){
  
}


function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.loginBox}>
      <Text style={styles.loginTitle}>Login</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Username"
        textContentType='username'
        onChangeText={(username) => setUsername(username)}
      
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        textContentType='password'
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      
      <View style={styles.loginButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')} //future me has to fix this
          style={styles.buttonLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/*
        Making the alternative login methods
        -Future devs Make it so that it actually logs in with those social networks thx
      */}
      <View style={styles.loginAlts}> 
        <TouchableOpacity 
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.buttonAlts}>
          <Image source={googlelogin} style={styles.loginIcons} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.buttonAlts}>
          <Image source={facebooklogin} style={styles.loginIcons} />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.buttonAlts}>
          <Image source={discordlogin} style={styles.loginIcons} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function RegisterScreen() {
  return (
    <View>
      <Text>Register Screen</Text>
    </View>
  );
}




//App and menu
export default function App() {
  

  //Fonts
  let [fontsLoaded] = useFonts({
    //'Avatar': require('./assets/fonts/avatar.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {


    
    return (
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
        </Stack.Navigator>
        
      </NavigationContainer>
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

  inputBox: {
    height: 40,
    width: 270,
    backgroundColor: '#FFF',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 20,
    margin: 5,
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





  //Login Screen styles
  loginBox: {
    alignItems: 'center',
    margin: 30,
  },
  loginAlts: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginVertical: 10,
  },
  loginIcons: {
    height: 40,
    width: 40,
  },
  loginButtons: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
  },

  loginButtonText: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center'
  },
  loginTitle: {
    fontSize: 40,
    marginBottom: 40,
  }, 
  buttonAlts: {
    height: 40,
    width: 40,
  },
  buttonLogin: {
    height: 40,
    width: 80,
    backgroundColor: 'purple',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
});
