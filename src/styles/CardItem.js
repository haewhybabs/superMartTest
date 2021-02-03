import { StyleSheet, Dimensions } from 'react-native';
import { primaryColor,textColor,primaryBlack,backgroundColor} from '../constants/strings';
const { width, height } = Dimensions.get('window');

export const Styles= StyleSheet.create({
    
    cardWrapper:{
        shadowColor: primaryBlack,
        shadowOffset: { width: 10, height: 1 },
        shadowOpacity:0.8,
        backgroundColor:'#fff', 
        borderRadius:10, 
        elevation: 8,
        width: '100%',
        marginTop:15,
        borderColor: primaryBlack,
        borderWidth:0.5,
    },
    cardContainer:{
        margin:10
    },
    colShow:{
        flexDirection:'row',
        //width:'100%'
    },
    expImage:{
        width:30,
        height:30
    },
    expText:{
        fontSize:19,
        marginLeft:10,
        color:'#212121'
    },
    expText2:{
        marginLeft:10,
        color:textColor,
        fontSize:18
    },
    expText3:{
        color:textColor,
        fontSize:15
    },
    expText4:{
        color:'green',
        fontSize:15
    },
    Button:{
        borderColor: '#20BF9F',
        borderStyle: 'solid',
        borderRadius:5,
        borderWidth:1,
        width: 120,
        height: 40,
        backgroundColor:'#20BF9F'
    },
    buttonText:{
        alignSelf:'center',
        fontWeight:'bold',
        marginTop:5,
        color:'#fff',
        fontSize:20
    }
})