import React from 'react';
import {View, Text, Button,Linking, Alert, StyleSheet} from 'react-native';

export default function SelectButton(props) {
    function pressHandler() {
        if (props.title == 'Basic Checkup'){
            props.navigation.navigate('Basic Checkup')
        } else if (props.title == 'Intermediate Checkup'){
            props.navigation.navigate('Intermediate Checkup')
        } else if (props.title == 'Advanced Checkup'){
            props.navigation.navigate('Advanced Checkup')
        }
    }
    return(
        <View style={styles.container} >
            <Text style={styles.button1} onPress={()=> {pressHandler()}}>
                 {props.title}
                 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {   
        
    },
    button1: {
        backgroundColor: 'cyan',
        paddingHorizontal : 40,
        paddingVertical: 100,
        borderRadius: 8,
        marginHorizontal : 15,
        marginVertical: 0,
    },
    button2: {
        backgroundColor: 'black',
    },
    button3: {
        backgroundColor: 'orange',
    },
});