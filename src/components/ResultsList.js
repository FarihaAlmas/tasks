import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
      return null;
    }
    return(
        <View style = {styles.container}> 
            <Text style ={styles.title}> {title} </Text>
            <FlatList
            horizontal 
            showsHorizontalScrollIndicator={false}
            data = {results}
            keyExtractor = {(result) => result.id }
            renderItem = { ({ item }) => {  // item is the object we are currentlly iterating.. it willbe called item in evey flatllist
                return(
                    <TouchableOpacity onPress ={() => navigation.navigate('ResultsShow', {id: item.id})}>
                        {/* here item.id will get the id of the image clicked and then show related images on next page */}
                    <ResultsDetails result ={item} /> 
                    </TouchableOpacity>
                )
            }}
             />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    }, 
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
});

export default withNavigation(ResultsList);