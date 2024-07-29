//Kullanıcı giriş yaptıktan sonra göreceği ekranlar burada.
 
import React from 'react'
import { HomePage,ProfilePage } from '../screens'//dedimki bu iki sayfayı indexten al. 
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
   <Stack.Navigator
   initialRouteName='Home'//İlk gelen ekrana bu sayfa olsun.
    screenOptions={{headerShown:false}}
   >
    
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='Profile ' component={ProfilePage}/>

    </Stack.Navigator>
  )
}

export default UserStack

