import React from 'react';
import {View, Text, Button,Linking, Alert, StyleSheet} from 'react-native';

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
            <Text style={styles.button1}>
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