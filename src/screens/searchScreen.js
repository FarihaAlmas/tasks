import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'; 

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults(); 
    
    const filterResultsByPrice= (price) => {
      // divide the resuls array into 3 parts 
      // price = $ , $$, $$$
      return results.filter(result => {
          return result.price === price;
      });
    };

    return (
        // <> this OR view down tag is the same when we want to show all the content on the screen without adding aditional features
        <View style={{ backgroundColor: 'white', flex: 1}}> 
            <View>
             
            <SearchBar 
            term = {term} 
            // onTermChange = {newTerm =>setTerm(newTerm)} 
            onTermChange = {setTerm} 
             onTermSubmit = { () => searchApi(term)}
            // onTermSubmit = {searchApi}
            />
            </View>
            {errorMsg ? <Text>{errorMsg}</Text> : null }
            {/* it will always take space on the screen so write it as turnary expression 
         take space only if it is true  */}
            {/* <Text> We have found this {results.length} </Text> */}
            <ScrollView>
            <ResultsList results = {filterResultsByPrice('$')} title ='Cost Effective' />
            <ResultsList results = {filterResultsByPrice('$$')}title ='Bit Pricier' />
            <ResultsList results = {filterResultsByPrice('$')}title ='Big Spender'/>
            </ScrollView>
        </View>  // OR  </>
    )
}


export default SearchScreen;