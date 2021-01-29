import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from '../Routes/HomeStack';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name='Home' component={HomeStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}