import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, _ScrollView } from 'react-native';
import Constants from 'expo-constants';
import SelectButton from './Components/SelectButton.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={{alignSelf: 'flex-start'}}> 
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
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent:  'center',
  },
  container1 : {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView : {
    backgroundColor: 'pink',
    marginHorizontal: 0,
  }
});
