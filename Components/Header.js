import React from 'react';
import {View, Image} from 'react-native';

export default function Header() {
    return(
        <Image style={{height: 450, width: 400}} source={require('./img1.jpg')} />
    );
}
