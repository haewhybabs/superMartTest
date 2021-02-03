import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Header from './header/Header';
import CardItem from './main/CardItem';
import {Styles} from '../styles/HomeScreen';

export default class HomeScreen extends Component{

    constructor(props){
        super(props)
        this.state={}
    }
    

    render(){
        
        return(
            <View style={Styles.container}>
                <Header />
                <View style={Styles.cardContainer}>
                    <CardItem 
                    />
                    <CardItem />
                    <CardItem />
                </View>
                
                
            </View>
        )
    }
}