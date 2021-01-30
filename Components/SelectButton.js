import React from 'react';
import {View, Text, Button,Linking, Alert, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

export default function SelectButton(props) {
    const pressHandler = () => {
        if (props.title == "Basic Checkup"){
            props.navigation.navigate(Basic_Checkup);
        } else if (props.title == "Basic Checkup"){
            props.navigation.navigate(Basic_Checkup);
        } else if (props.title == "Intermediate Checkup"){
            props.navigation.navigate(Basic_Checkup);
        } else if (props.title == "Basic Checkup"){
            props.navigation.navigate(Basic_Checkup);
        } else if (props.title == "Basic Checkup"){
            props.navigation.navigate(Basic_Checkup);
        } else if (props.title == "Basic Checkup"){
            props.navigation.navigate(Basic_Checkup);
        }
      }
    return(
        <View style={styles.container} >
            <LinearGradient colors={['pink', 'cyan']} start={{x:0,y:1}} end={{x:1,y:0}} style={styles.container}>
            <Text style={styles.button1}>
                 {props.title}
                 
            </Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container : { 
            borderRadius: 10,
    },

    button1: {
        paddingHorizontal : 40,
        paddingVertical: 100,
        borderRadius: 8,
        marginHorizontal : 15,
        marginVertical: 0,
        fontSize: 18,
        fontFamily:"sans-serif-medium"
    },
    button2: {
        backgroundColor: 'black',
    },
    button3: {
        backgroundColor: 'orange',
    },
});