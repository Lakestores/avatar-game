//system imports
import React, { useContext, useEffect } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';

import GlobalState from './contexts/GlobalState';

//username,password,
function ProfileScreen({navigation}) {
    const [state, setState] = useContext(GlobalState);

    return (
        <View style={styles.mainbox}>
            <Text style={styles.title}>{state.username}</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    mainbox: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
});

export default ProfileScreen;