import React from 'react';
import {View, Text, Button,Linking, Alert, StyleSheet} from 'react-native';

export default function SelectButton(props) {
    return(
        <View style={styles.container} >
            <Text style={styles.button1}  onPress={ () => Alert.alert('Nothing happened')}>
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
        paddingHorizontal : 37,
        paddingVertical: 50,
        borderRadius: 8,
        margin : 5,
    },
    button2: {
        backgroundColor: 'black',
    },
    button3: {
        backgroundColor: 'orange',
    },
});