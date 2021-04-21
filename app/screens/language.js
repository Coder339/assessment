import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import I18n,{ strings } from '../locales/localisation'
// import I18n from 'react-native-i18n';

export default function Language() {
    const [state, setState] = useState('English')
    return (
        <View style={styles.container}>
            <Text>{strings('hello')}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                Alert.alert(
                    'Language Selection',
                    'Multi language support',
                    [
                    {
                        text: 'French',
                        onPress: () => {
                        I18n.locale = 'fr';
                        setState('French');  // to refresh the page we are using state change
                        },
                    },
                    {
                        text: 'English',
                        onPress: () => {
                        I18n.locale = 'en';
                        setState('English');
                        },
                    },
                    {
                        text: 'Hindi',
                        onPress: () => {
                        I18n.locale = 'hi';
                        setState('Hindi');
                        },
                    },
                    {
                        text: 'Punjabi',
                        onPress: () => {
                        I18n.locale = 'pa';
                        setState('Punjabi');
                        },
                    },
                    {
                        text: 'Cancel',
                        onPress: () => {
                        console.log('Cancel Pressed');
                        },
                        style: 'cancel',
                    },
                    ],
                    {cancelable: false},
                );
                }}>
                <Text>Click Change Language</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    button: {
        backgroundColor: '#FF5733',
        paddingVertical: 20,
        alignSelf: 'center',
        marginVertical: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
      },
})
