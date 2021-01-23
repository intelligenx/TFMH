import React from 'react';
import {View, Text, Button,Linking, Alert, StyleSheet} from 'react-native';

export default function SelectButton(props) {
    return(
        <View>
            <Text 
                onPress={ () => Alert.alert('Nothing happened')} 
                style={styles.button1}>{props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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