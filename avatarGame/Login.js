//system imports
import React, { useContext } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';

import GlobalState from './contexts/GlobalState';
//Import Assets
import googlelogin from './assets/imgs/google-icon.png';
import facebooklogin from './assets/imgs/facebook-icon.png';
import discordlogin from './assets/imgs/discord-icon.webp'; 

function LoginScreen({ navigation }) {
    const [state, setState] = useContext(GlobalState);
  
    return (
        <View style={styles.loginBox}>
            <Text style={styles.loginTitle}>Login</Text>
            <TextInput
            style={styles.inputBox}
            placeholder="Username"
            textContentType='username'
            //onChangeText={(username) => setUsername(username)}
            onChangeText={(text) => setState(state => ({...state, username: text}))}
            
            />
            <TextInput
            style={styles.inputBox}
            placeholder="Password"
            textContentType='password'
            secureTextEntry={true}
            onChangeText={(text) => setState(state => ({...state, password: text}))}
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
                    onPress={() => (setState(state => ({...state, username: "Google"})),navigation.navigate('ProfileScreen'))}
                    style={styles.buttonAlts}>
                    <Image source={googlelogin} style={styles.loginIcons} />
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => (setState(state => ({...state, username: "Facebook"})),navigation.navigate('ProfileScreen'))}
                    style={styles.buttonAlts}>
                    <Image source={facebooklogin} style={styles.loginIcons} />
                </TouchableOpacity>
        
                <TouchableOpacity 
                    onPress={() => (setState(state => ({...state, username: "Discord"})),navigation.navigate('ProfileScreen'))}
                    style={styles.buttonAlts}>
                    <Image source={discordlogin} style={styles.loginIcons} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
  



const styles = StyleSheet.create({
    loginBox: {
        alignItems: 'center',
        margin: 30,
      },
      loginButtons: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 40,
      },
      loginIcons: {
        height: 40,
        width: 40,
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
      buttonLogin: {
        height: 40,
        width: 100,
        backgroundColor: 'purple',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
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
      loginAlts: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        marginVertical: 10,
      },
      buttonAlts: {
        height: 40,
        width: 40,
      },
});


export default LoginScreen;