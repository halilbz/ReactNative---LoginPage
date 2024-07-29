//İki sayfa arasında kontrolü bu yapacak. Appjs deki navigatör yapısı gelcek buraya

 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 import AuthStack from './AuthStack'
 import UserStack from './UserStack'
import { NavigationContainer } from '@react-navigation/native'

 const rootNavigation = () => {
   
    const isAuth = false

    return (

    <NavigationContainer> 
         {
            !isAuth 
                ? <AuthStack/>
                : <UserStack/>
         }
    </NavigationContainer>

   )
 }
 
 export default rootNavigation
 
 const styles = StyleSheet.create({})