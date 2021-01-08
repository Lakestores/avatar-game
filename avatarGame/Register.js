//system imports
import React, { useContext } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';

import GlobalState from './contexts/GlobalState';

function RegisterScreen({navigation}) {
    const [state, setState] = useContext(GlobalState);

    return (
        <View>
            <View style={styles.loginBox}>
                <Text style={styles.loginTitle}>Register</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Username"
                    textContentType='username'
                    onChangeText={(text) => setState(state => ({...state, username: text}))}
                
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Password"
                    textContentType='password'
                    secureTextEntry={true}
                    onChangeText={(text) => setState(state => ({...state, password: text}))}
                />

                <TextInput
                    style={styles.inputBox}
                    placeholder="E-mail"
                    textContentType='emailAddress'
                    onChangeText={(text) => setState(state => ({...state, email: text}))}
                />
                <View style={styles.loginButtons}>
                    <TouchableOpacity
                    onPress={() => navigation.reset({index: 0,routes: [{ name: 'ProfileScreen' }]})} //future me has to fix this
                    
                    style={styles.buttonLogin}>
                    <Text style={styles.loginButtonText}>Register</Text>
                    </TouchableOpacity>
                </View>
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
});

export default RegisterScreen;