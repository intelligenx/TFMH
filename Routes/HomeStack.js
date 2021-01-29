import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import BasicCheckup from '../Screens/BasicCheckup'
import IntermediateCheck from '../Screens/IntermediateCheck';
import AdvancedCheck from '../Screens/AdvancedCheck';

const Stack = createStackNavigator();

export default function HomeStack() {
    return(
       
            <Stack.Navigator>
                <Stack.Screen name='Tech For Metal Heath' component={Home} />
                <Stack.Screen name='Basic Checkup' component={BasicCheckup} />
                <Stack.Screen name='Intermediate Checkup' component={IntermediateCheck} />
                <Stack.Screen name='Advanced Checkup' component={AdvancedCheck} />
            </Stack.Navigator>
        
    );
}