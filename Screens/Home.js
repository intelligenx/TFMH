import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, _ScrollView } from 'react-native';
import Constants from 'expo-constants';

import ButtonGroup from '../Components/ButtonGroup';
import Header from '../Components/Header';

export default function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Header />
                <ButtonGroup />
            </ScrollView>
        </SafeAreaView>
  
    );
}

const styles = StyleSheet.create({
    container : {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView : {
      backgroundColor: 'pink',
      marginHorizontal: 0,
    }
  });
  