import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Tech For Metal Heath' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}