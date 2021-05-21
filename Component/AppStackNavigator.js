import React from 'react';
import DonorScreen from '../screens/DonorScreen';
import VolunteerScreen from '../screens/VolunteerScreen';
import VolunteerDetailsScreen from '../screens/VolunteerDetailsScreen';
import {createStackNavigator} from 'react-navigation-stack'

export const AppStackNavigator = createStackNavigator({
    VolunteerList:{screen:VolunteerScreen,navigationOptions:{headerShown:false}},
    VolunteerDetails:{screen:VolunteerDetailsScreen,navigationOptions:{headerShown:false}}
},
{initialRouteName:'VolunteerList'})