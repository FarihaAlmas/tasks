import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen= ({navigation}) => {
    const [result, setResult]= useState(null);

const id = navigation.getParam('id');
// id can't be directly get passed form result list as it is not a parent page so we have to get it through the navigtion parameter
//  this id will be used to make request to yelp api  

const getResult = async (id) => {
 const response = await yelp.get(`/${id}`);
 setResult(response.data);
};
useEffect(() => {
    getResult(id)
}, []);

if(!result) {
    return null;
    // at start the value of the resuls is null.when fetching name or etc it will give an error
    // if 'null' don't show anything on the screen so no functions will be operated and there will be no error.
}

return(
        <View style={{flex: 1}}>
            <Text style ={styles.text}>{result.name}</Text>
            <FlatList 
            data = {result.photos}
            keyExtractor = {(photo) => photo}
            renderItem = {({item}) => {
                return <Image style ={styles.image} source ={{uri: item}} />
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
text: {
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 15,
    marginTop: 15
},
image:{
    height: 200,
    width: 300, 
    marginHorizontal:20,
    marginBottom: 15
}
});

export default ResultsShowScreen;

