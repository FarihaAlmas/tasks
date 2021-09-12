import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const ResultsDetails =({result}) => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source={{uri: result.image_url}}   />
            <Text style = {styles.name}>{result.name}</Text>
            <Text style = {styles.rating}>{result.rating}  Stars, {result.review_count} reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    marginLeft: 20,
    },
    image: {
        width: 230,
        height: 130,
        borderRadius: 4,
        marginBottom: 5,
    },
    name : {
        fontWeight:'bold',
        
    }
})

export default ResultsDetails;