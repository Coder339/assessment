import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,Alert,FlatList,Modal, ActionSheetIOS } from 'react-native'
import ScrollContainer from '../components/common/scrollcontainer';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { colors,fonts, } from '../assets/globalstyleconstants'
import { scaleHeight, scaleWidth } from '../assets/globalstylefunctions';
import AppButton from '../components/appbutton';
import Loader from '../components/common/loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as actions from '../redux/actiontypes';

export default function Screen1({route}) {

    const state = useSelector(state => state);
    const [loading,setLoading] = useState(false)
    const [studentData,setStudentData] = useState([])
    const [refresh,setRefresh] = useState(false)
    const [userdata,setUserData] = useState({
        name:'',
        class:'',
    })

    const [newdata,setNewData] = useState({
        newname:'',
        newclass:'',
    })

    
    
    const navigation = useNavigation();
    const dispatch = useDispatch()

    
    const nameHandler=(text)=>{
        setUserData({...userdata,name:text})

    }
    const classHandler=(text)=>{
        setUserData({...userdata,class:text})
        
    }

    // const newnameHandler=(text)=>{
    //     setNewData({...newdata,newname:text})

    // }
    // const newclassHandler=(text)=>{
    //     setNewData({...newdata,newclass:text})
        
    // }



    const AddStudent = () => {

            
        if ( userdata.name.length == 0 || userdata.class.length == 0 ) {
            Alert.alert('Wrong Input!', 'Name or class field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
            
        // setLoading(true)
        // studentData.push(userdata)
        // const element = [...studentData]
        // let element ={name:userdata.name,class:userdata.class}
        setStudentData(item=>[...item,userdata])
        setRefresh(!refresh)

        dispatch({type:actions.ADD_STUDENT,payload:studentData})
        
           

    }

    const updateStudent =(index)=>{
        // alert(index)
        // const temp = [...studentData]
        // let element = temp[index]
        // let updatedName = element.name
        // let updatedClass = element.class

        // console.log('student',element)
        const updatedData = {...studentData[index],name:newdata.newname,class:newdata.newclass}
        console.log('updated'.updatedData)
        setStudentData(updatedData)
        setRefresh(!refresh)

        dispatch({type:actions.UPDATE_STUDENT,payload:studentData})
    }

    const Item =({item,index}) =>{
        const [modalVisible, setModalVisible] = useState(false);
        return(
            <View>
                <TouchableOpacity style={styles.student} onPress={()=>setModalVisible(true)}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.title}>{item.class}</Text>
                </TouchableOpacity>
                

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        avoidKeyboard={true}
                        autoFocus={true}
                        onRequestClose={()=>setModalVisible(false)}
                    >
                        <View style={styles.shadow} onTouchStart={()=>setModalVisible(false)}/>

                        <ScrollContainer
                            
                            style={styles.modalView}
                            // onPress={onPress}
                            >
                            
                            <Text style={styles.modalText}>{item.name}</Text>
                            <View style={styles.loginContainer}>
                    
                                <Text style={styles.label}>Name</Text>
                                <View style={{...styles.user,...styles.inputBorder}}>
                                    <TextInput
                                    placeholder='update john wick'
                                    // underlineColorAndroid='transparent'
                                    // placeholderTextColor={colors.white}
                                    onChangeText={(text)=>setNewData({...newdata,newname:text})}
                                    value={newdata.newname}
                                    style={{...styles.input,width:'90%'}}
                                    />
                                </View>
                                
                                <View style={{marginTop:scaleWidth('2%')}}>
                                    <Text style={styles.label}>Class</Text>
                                    <View style={{...styles.user,...styles.inputBorder}}>
                                        <TextInput
                                        placeholder='update class'
                                        
                                        // underlineColorAndroid='transparent'
                                        // placeholderTextColor={colors.white}
                                        onChangeText={(text)=>setNewData({...newdata,newclass:text})}
                                        value={newdata.newclass}
                                        style={{...styles.input,width:'90%'}}
                                        />
                                    </View>
                                </View>
                                
                            </View>
                            <AppButton 
                                text='UPDATE STUDENT' 
                                style={styles.addButton} 
                                textStyle={{color:colors.white}}
                                // onPress={{}}
                            />

                        </ScrollContainer>
                        
                    </Modal>
                    
                
            </View>
        )
    }

    const StudentItem =({item,index})=>{
        return(
            <Item item={item} index={index}/>
        )
    }

    const seprator=()=>{
        
        return(
            <View style={{margin:scaleWidth('3%')}}></View>
        )
    }
    useEffect(() => {
        console.log('state',state)
    }, [state])

    return (
        
        <View style={styles.container}>
            <Loader visible={loading}/>
            <Text style={styles.logo}>S C R E E N    1</Text>
            <View style={styles.loginContainer}>
                
                <Text style={styles.label}>Name</Text>
                <View style={{...styles.user,...styles.inputBorder}}>
                    <TextInput
                    placeholder='john wick'
                    // underlineColorAndroid='transparent'
                    placeholderTextColor={colors.black}
                    onChangeText={nameHandler}
                    value={userdata.name}
                    style={{...styles.input,width:'90%'}}
                    />
                </View>
                
                <View style={{marginTop:scaleWidth('2%')}}>
                    <Text style={styles.label}>Class</Text>
                    <View style={{...styles.user,...styles.inputBorder}}>
                        <TextInput
                        placeholder='class'
                        // placeholderTextColor="#000"
                        underlineColorAndroid='transparent'
                        placeholderTextColor={colors.black}
                        onChangeText={classHandler}
                        value={userdata.class}
                        style={{...styles.input,width:'90%'}}
                        />
                    </View>
                </View>
                
            </View>
            <AppButton 
                text='ADD STUDENT' 
                style={styles.addButton} 
                textStyle={{color:colors.white}}
                onPress={AddStudent}
            />
            <View style={styles.listContainer}>

                <FlatList
                    data={studentData}
                    keyExtractor={(item,index)=>index}
                    renderItem={StudentItem}
                    ItemSeparatorComponent={seprator}
                    extraData={refresh}
                    keyboardShouldPersistTaps='handled'

                />
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
        // height:scaleHeight('100%')
    },
    logo:{
        fontFamily:fonts.FasterOneRegular,
        marginVertical:scaleHeight('5%'),
        color:colors.black,
        fontSize:scaleWidth('5%')
    },
    input:{
        // backgroundColor:'rgba(255,255,255,0.3)',
        color:colors.black,
        fontFamily:fonts.MontserratRegular,
        height:scaleHeight('7%')
    },
    
    label:{
        color:colors.black,
        fontSize:scaleWidth('4%'),
        fontFamily:fonts.MontserratBold,
    },
    user:{
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:colors.whiteFade,  
    },
    inputBorder:{
        borderWidth:1,
        borderColor:colors.black
    },
    addButton:{
        // flex:1,
        width:scaleWidth('80%'),
        height:scaleHeight('8%'),
        // borderRadius:moderateScale(5),
        backgroundColor:colors.black,  
        marginTop:scaleHeight('4%'),
    },

    student:{
        height:scaleHeight('5%'),
        width:scaleWidth('90%'),
        backgroundColor:'red',
        flexDirection:'row',
        padding:scaleWidth('2%'),
        justifyContent:'space-between',
    },
    listContainer:{
        marginVertical:scaleWidth('1%'),
        height:scaleWidth('100%')
    },
    title:{
        color:colors.white
    },


    modalView: {
        height:scaleHeight('100%'),
        marginTop:scaleHeight('48%'),
        backgroundColor: colors.white,
        // borderRadius: 20,
        borderTopLeftRadius:scaleWidth('5%'),
        borderTopRightRadius:scaleWidth('5%'),
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    shadow: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#rgba(0,0,0,0.6)'
    },
    modalText: {
        // marginBottom: 15,
        // textAlign: "center",
        fontSize:scaleWidth('4%'),
        fontFamily:fonts.MontserratBold,
    },
    
    

})
