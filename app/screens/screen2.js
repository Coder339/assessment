import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions'
import { colors, fonts } from '../assets/globalstyleconstants'
import { useSelector, useDispatch } from 'react-redux';

export default function Screen2() {

    const state = useSelector(state => state);
    const [data,setData] = useState([])

    useEffect(() => {
       
        console.log('length',state.students)
        
        let num = (state.students.length+1)**2

        console.log('sqaure',num)
        // const temp = [...range(1,num)]
        // setData(temp)
        

        setData([...Array(num).keys()]);
        console.log('data',data)

    }, [state])
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>S C R E E N   2</Text>
            <View style={styles.squareContainer}>
                {state.students ?
                    (data.map((item,index)=>
                    
                        <View key={index} style={styles.square}>

                            <Text>{index+1}</Text>
                        </View>
                
                    ))
                    :
                    <Text style={styles.desc}>Start adding students at Screen 1</Text>
                 }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flexGrow:1,
        flex:1,
        backgroundColor:colors.white,
        alignItems:'center',
        height:scaleHeight('100%')
    },
    logo:{
        fontFamily:fonts.FasterOneRegular,
        marginVertical:scaleHeight('5%'),
        color:colors.black,
        fontSize:scaleWidth('5%')
    },
    squareContainer:{
        width:'100%',
        // height:'100%',
        // padding:scaleWidth('1%'),
        // margin:scaleWidth('1%'),
        justifyContent:'space-around',
        // alignItems:'center',
        // flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        // backgroundColor:colors.appColor,
    },
    square:{
        width:scaleWidth('16%'),
        height:scaleWidth('16%'),
        backgroundColor:'red',
        margin:scaleWidth('1%'),
        justifyContent:'center',
        alignItems:'center'
    },
    desc:{
        fontFamily:fonts.MontserratBold
    }
})
