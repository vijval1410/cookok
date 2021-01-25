import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';

import db from '../config'
import MyHeader from "../components/MyHeader";



export default class ReadRecipeScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allRecipes:[],
      dataSource:[],
      search : ''
    }
  }
  componentDidMount(){
    this.retrieveRecipes()
  }

  updateSearch = search => {
    this.setState({ search });
  };


  retrieveRecipes=()=>{
    try {
      var allRecipes= []
      var recipe = db.collection("recipes")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
              
              allRecipes.push(doc.data())
              console.log('this are the recipes',allRecipes)
          })
          this.setState({allRecipes})
        })
    }
    catch (error) {
      console.log(error);
    }
  };


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.allRecipes.filter((item)=> {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

    render(){
      return(
        <View style ={styles.container}>
          <View style={{ flex: 0.12 }}>
          <MyHeader title="Cook It" navigation={this.props.navigation} />
        </View>
           
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Type Here..."
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}
            />
          </View>
          
          <FlatList
                data={this.state.search === "" ?  this.state.allRecipes: this.state.dataSource}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <Text>  Dish: {item.dish}</Text>
                    <Text>  Chef : {item.chef}</Text>
                    <Text>  Recipe: {item.recipeText}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                /> 
          
          
          
        </View>  
      );      
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'pink',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent:'center',
    alignSelf: 'center',
  }
});