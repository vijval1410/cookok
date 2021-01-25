import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs'

import WriteRecipeScreen from '../screens/WriteRecipeScreen'
import ReadRecipeScreen from '../screens/ReadRecipeScreen'



export const AppTabNavigator = createBottomTabNavigator({
  WriteRecipe: WriteRecipeScreen,
  ReadRecipe: ReadRecipeScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "WriteRecipe"){
        return(
          <Image
          source={require("../assets/cook.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "ReadRecipe"){
        return(
          <Image
          source={require("../assets/fork.png")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
})

