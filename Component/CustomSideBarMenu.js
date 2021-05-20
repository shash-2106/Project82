import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase';
import db from '../config';
import SignupLoginScreen from '../screens/SignupLoginScreen'

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={{flez:1}}>
                <DrawerItems {...this.props}></DrawerItems>
                <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
                    <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
                    onPress={()=>{this.props.navigation.navigate('SignupLoginScreen')
                    firebase.auth().signOut()}}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}