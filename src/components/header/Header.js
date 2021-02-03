import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Styles} from '../../styles/Header';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.logoHeader}>
                    <Image
                    resizeMode="contain"
                    source={require('../../public/logo.png')}
                    style={Styles.logoImage}
                    />
                </View>
                
                
            </View>
        )
    }
}
