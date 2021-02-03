import { StyleSheet, Dimensions } from 'react-native';
import { primaryColor,textColor,primaryBlack } from '../constants/strings';
const { width, height } = Dimensions.get('window');

export const Styles= StyleSheet.create({
    container:{
        height:60,
        width:'100%',
        backgroundColor:'#FFFFFF',
        shadowColor: primaryBlack,
        shadowOffset: { width: 10, height: 1 },
        shadowOpacity:0.8,
        elevation: 8,
    },
    logoHeader:{
        width:'50%',margin:5
    },
    logoImage:{
        width:'100%',
        height:50,
       
    }
})