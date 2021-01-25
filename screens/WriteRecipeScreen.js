import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid, TextInput} from 'react-native';
import MyHeader from "../components/MyHeader";
import db from '../config'
import firebase from 'firebase'

export default class WriteRecipeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dish: '',
            chef: '',
            recipeText: '',
        }
    }

    submitRecipe = ()=>{
        db.collection("recipes").add({
            dish: this.state.dish,
            chef: this.state.chef,
            recipeText: this.state.recipeText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            dish: '',
            chef: '',
            recipeText: ''
        })
        //ToastAndroid.show('Your recipe has been sumitted', ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={{ flex: 0.12 }}>
          <MyHeader title="Write It" navigation={this.props.navigation} />
        </View>
                
                <TextInput
                    placeholder="Dish"
                    onChangeText= {(text)=>{
                        this.setState({
                            dish: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Chef"
                    onChangeText= {(text)=>{
                        this.setState({
                            chef: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput
                    placeholder="Write your recipe"
                    onChangeText= {(text)=>{
                        this.setState({
                            recipeText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={()=>{this.submitRecipe}}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      padding: 10,
      margin:10
  },
  author: {
      height: 40,
      borderWidth: 2,
      padding: 10,
      margin:10
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      padding:10
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  }
});
