//system imports
import React, { useContext, useEffect } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import GlobalState from './contexts/GlobalState';

function settingsScreen({}) {
    const [state, setState] = useContext(GlobalState);
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.reset({index: 0,routes: [{ name: 'Home' }]})} >
                <Text style={styles.button}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 100,
        backgroundColor: 'purple',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
    },
});

export default settingsScreen;