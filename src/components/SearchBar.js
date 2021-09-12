import React, {useState}  from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';  

const SearchBar = ({term, onTermChange, onTermSubmit}) => {


    return (
        <View style={{ backgroundColor: 'white' }}>
        <View style={styles.srchBG}>
            <Feather name= 'search' style={styles.srchIconStyle} />
            <TextInput
           autoCapitalize="none"
           autoCorrect={false}
           style={styles.inputStyle}
           placeholder="Search"
           value={term}
           onChangeText={onTermChange}
           onEndEditing={onTermSubmit}
          />

        </View>
        </View>
    )
}  

const styles = StyleSheet.create({
    srchBG: {
        
        height: 50,
        width:375,  
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 10,
        // width:100,
        // borderWidth: 1,
        // borderColor: 'black',   
        backgroundColor: '#F0EEEE',
        borderRadius: 5,

    },
    inputStyle: {
        //  borderWidth: 1,
        // borderColor: 'black',
        flex: 1,
        
        fontSize: 18,
    },
    srchIconStyle: {
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});


export default SearchBar;