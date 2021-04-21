import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { fonts, colors } from '../assets/globalstyleconstants'
import {useNavigation} from '@react-navigation/native';
import { scaleWidth } from '../assets/globalstylefunctions';

export default function Splash() {
    const [animating, setAnimating] = useState(true);

    const navigation = useNavigation()
    
    useEffect(() => {
        setTimeout(() => {
          setAnimating(false);
          navigation.replace('App')
          
        }, 5000);
      }, []);

    return (
        <View style={styles.splash}>
            <View style={styles.circle}>
                <Text style={styles.text}>Let's Go</Text>
            </View>
        </View>
    )
}

let CIRCLE_RADIUS = scaleWidth('10%');
const styles = StyleSheet.create({
    splash:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    circle: {
        // flex:1,
        backgroundColor:colors.error,
        width: CIRCLE_RADIUS * 5,
        height: CIRCLE_RADIUS * 5,
        borderRadius: CIRCLE_RADIUS * 2.5,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontFamily:fonts.FasterOneRegular,
        fontSize:scaleWidth('5%')
    },
})
