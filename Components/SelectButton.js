import React from 'react';
import {View, Text, Button,Linking, Alert, StyleSheet} from 'react-native';

export default function SelectButton(props) {
    return(
        <View >
            <Text style={styles.container}  onPress={ () => Alert.alert('Nothing happened')}>
                 {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'cyan',
        padding: 40,
        borderRadius: '5px',
    },
    button1: {
        backgroundColor: 'red',
        padding: 5,
    },
    button2: {
        backgroundColor: 'black',
    },
    button3: {
        backgroundColor: 'orange',
    },
});