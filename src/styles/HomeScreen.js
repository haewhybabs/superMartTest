import { StyleSheet, Dimensions } from 'react-native';
import { primaryColor,textColor,primaryBlack,backgroundColor} from '../constants/strings';
const { width, height } = Dimensions.get('window');

export const Styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:backgroundColor
    },
    cardContainer:{
        marginTop:0,
        margin:10,
        
    }
    
})