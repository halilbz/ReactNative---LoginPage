//Kullanıcı giriş yapmadan önce göreceği ekranlar burada.
import React from 'react' 
import { LoginPage, SignupPage } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack =createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='Login'//ilk bu sayfa gelsin
      screenOptions={{headerShown:false}}
    >

        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name='Signup' component={SignupPage}/>

    </Stack.Navigator>
  )
}

export default AuthStack

