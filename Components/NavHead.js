import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function NavHead() {
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.headertext}>Tech For Mental Health</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',

    },
    headertext: {

    }
})