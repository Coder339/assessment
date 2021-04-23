import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

export default function Loader() {
    return (
        <View style={styles.container}>
            {/* <Text>loader</Text> */}
            <LottieView 
              style={styles.loader}
              source={require('../config/loader.json')} 
            //   colorFilters={[{
            //     keypath: "button",
            //     color: "#F00000"
            //   },{
            //     keypath: "Sending Loader",
            //     color: "#F00000"
            //   }]}
              autoPlay 
              loop 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    loader:{
        width:200,
        height:200,
    }
})
