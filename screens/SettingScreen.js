import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { TextInput } from 'react-native';


export default class SettingScreen extends React.Component{
   render(){
       return(
           <Text>Settings</Text>
       )
   }
}
const styles = StyleSheet.create({
    container : 
    { flex:1,
        alignItems: 'center',
         justifyContent: 'center' }, 
         formContainer:{ flex:1,
         width:'100%', 
         alignItems: 'center' 
        }, 
        textInput:{
            width:"90%",
            height:50,
            alignSelf:'center',
            borderColor:'#ffa3a9',
            borderRadius:10,
            borderWidth:1,
            marginTop:20,
            padding:10,
        },
        buttonText:{
             fontSize:25, 
             fontWeight:"bold", 
             color:"#fff" 
            },
            
            button:{
                width:"90%",
            height:40,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            margin:10,
            padding:10,
            backgroundColor:"#bfebff",
            shadowColor: "#000",
            shadowOffset: {
               width: 0,
               height: 8,
            }
        }   
})