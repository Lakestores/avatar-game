//system imports
import React, { useContext, useEffect } from 'react';
import { TextInput, Image, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import GlobalState from './contexts/GlobalState';

function MapScreen({}) {
    const [state, setState] = useContext(GlobalState);
    const navigation = useNavigation();
    
    return (
        <View>
        </View>
    );
}


export default MapScreen;