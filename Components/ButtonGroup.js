import React from 'react';
import { InputAccessoryView, StyleSheet, Text, View, } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import SelectButton from './SelectButton.js';

export default function ButtonGroup({navigation}) {

    return(
        <View style={styles.container}>
          <View style={{alignSelf: 'flex-start'}} onPress={ () => {pressHandler()}}>                 
            <SelectButton gradcolour='a' title='Baic Checkup' navigation={navigation}/>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <SelectButton gradcolour='a' title='Intermidate Checkup' />
          </View >
          <View style={{alignSelf: 'flex-start'}}>
            <SelectButton gradcolour='a' title='Advanced Checkup' />
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <SelectButton gradcolour='a' title='Help-Contact' />
          </View>
          <View style={{alignSelf: 'flex-start'}}>
            <SelectButton gradcolour='a' title='Deceloper-contact' />
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <SelectButton gradcolour='a' title='About' />
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
      // fontWeigh: '90'
      fontSize: 500, 
    },
});