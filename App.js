import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/searchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// ()  =
 const navigator = createStackNavigator({
search : SearchScreen,
ResultsShow: ResultsShowScreen,
}, { 
initialRouteName: 'search',
defaultNavigationOptions: {
  title: 'Resturant Search'
}
 }
 ) 

 export default createAppContainer (navigator);
