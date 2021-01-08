//system imports
import React, { useContext, useEffect } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import GlobalState from './contexts/GlobalState';
import settingsScreen from './Settings';

function MenuBar({}) {
    const [state, setState] = useContext(GlobalState);
    const navigation = useNavigation();
    const menustyle = StyleSheet.create({
        button: {
            height: 70,
            width: 75,
            backgroundColor: 'blue',
            borderRadius: 5,
            borderWidth: 2,
            marginHorizontal: 32,
            marginVertical: 10,
            
        },
        boxxy: {
            alignContent: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: "absolute",
            top: 623,
            width:410,
            right: -25,
            height: 100,
            backgroundColor: 'green',
            borderWidth: 3,
        },
        textys: {
            textAlign: 'center',
            marginTop: 20,
            color: 'white',
        },
    });

    return (
        <View style={menustyle.boxxy}>
            
            <TouchableOpacity style={menustyle.button}
                onPress={() => navigation.navigate('MapScreen')}>
                <Text style={menustyle.textys}>Map</Text>
            </TouchableOpacity>

            <TouchableOpacity style={menustyle.button}>
                <Text style={menustyle.textys}>No idea</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('settingsScreen')} //future me has to fix this
                    
                style={menustyle.button}>
                <Text style={menustyle.textys}>Settings</Text>
            </TouchableOpacity>
        </View>

    );
}


const menustyle = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        marginVertical: 10,
        backgroundColor: 'green',
        height: 200,
    },
    button: {
    },
});

export default MenuBar;