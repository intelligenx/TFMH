import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import SelectButton from './SelectButton.js';

export default function ButtonGroup({navigation}) {

    const pressHandler = () => {
      navigation.navigate(Basic_Checkup);
    }

    return(
        <View style={styles.container}>
          <View style={{alignSelf: 'flex-start'}} onPress={ () => {pressHandler()}}> 
            <SelectButton gradcolour='a' title='   Something  ' />
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <SelectButton gradcolour='a' title='   Something  ' />
          </View >
          <View style={{alignSelf: 'flex-start'}}>
            <SelectButton gradcolour='a' title='   Something  ' />
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <SelectButton gradcolour='a' title='   Something  ' />
          </View>
          <View style={{alignSelf: 'flex-start'}}>
            <SelectButton gradcolour='a' title='   Something  ' />
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <SelectButton gradcolour='a' title='   Something  ' />
          </View> 
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      justifyContent:  'center',
      marginTop: -20,
    },
});