import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Styles} from '../../styles/CardItem';
export default class CardItem extends Component {
    constructor(props){
        super(props)
        this.state={};
    }

    render(){
        return(
            <View style={Styles.cardWrapper}>
                <View style={Styles.cardContainer}>
                    <View style={Styles.colShow}>  
                        <Image
                        resizeMode="contain"
                        source={require('../../public/exp.png')}
                        style={Styles.expImage}
                        />
                        <View>
                            <Text style={Styles.expText}>06.30</Text>   
                            <Text style={Styles.expText2}>EDI</Text> 
                        </View>
                          
                        <View style={{marginTop:10,marginLeft:10}}>
                            <Image 
                                resizeMode="contain"
                                source={require('../../public/arrowForward.png')}
                                style={Styles.expImage}
                            />
                        </View>
                        <View>
                            <Text style={Styles.expText}>08.30</Text>   
                            <Text style={Styles.expText2}>LHR</Text> 
                        </View>

                        <View style={{marginLeft:'auto'}}>
                            <Text style={Styles.expText3}>2h 00</Text>
                            <Text style={{...Styles.expText4,marginTop:3}}>Direct</Text>
                        </View>
                    </View>

                    <View style={{marginTop:20}} />

                    <View style={Styles.colShow}>  
                        <Image
                        resizeMode="contain"
                        source={require('../../public/exp.png')}
                        style={Styles.expImage}
                        />
                        <View>
                            <Text style={Styles.expText}>14.30</Text>   
                            <Text style={Styles.expText2}>LHR</Text> 
                        </View>
                          
                        <View style={{marginTop:10,marginLeft:10}}>
                            <Image 
                                resizeMode="contain"
                                source={require('../../public/arrowForward.png')}
                                style={Styles.expImage}
                            />
                        </View>
                        <View>
                            <Text style={Styles.expText}>16.00</Text>   
                            <Text style={Styles.expText2}>EDI</Text> 
                        </View>

                        <View style={{marginLeft:'auto'}}>
                            <Text style={Styles.expText3}>2h 00</Text>
                            <Text style={{...Styles.expText4,marginTop:3}}>Direct</Text>
                        </View>
                    </View> 
                    
                    <View style={{...Styles.colShow,marginTop:20}}>
                        <View>
                            <Text style={{fontSize:25,fontWeight:'bold'}}>€ 98</Text>
                            <Text style={{color:'#9C9C9C'}}>easyjet.com</Text>
                        </View>

                        <View style={{marginLeft:'auto'}}>
                            <View style={Styles.Button}>
                                <View style={{justifyContent:'center'}}>
                                    <Text style={Styles.buttonText}>Select</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}