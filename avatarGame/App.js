//import system
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import assets
import logo from './imgs/logo.gif'; 

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>
        {'\n'}Avatar Game
        </Text>
        <Image source={logo} style={styles.logo} />
      </View>
      
      <View style={styles.menu}>
        <View style={styles.submenu}>
          <Text style={styles.menutext} >
            Use the Login or Register button below to start{'\n'}{'\n'}
          </Text>
          
          <TouchableOpacity
            onPress={() => alert('Login Failed')}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Not available yet')}
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
    top: 481,
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
    color: '#ff0000', 
    fontSize: 40,
  },
  license: {
    
  },
});
