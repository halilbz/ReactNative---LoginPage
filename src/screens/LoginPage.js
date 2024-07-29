
import { 
    ActivityIndicator,
     StyleSheet,
      Text, 
      View, 
      TextInput,
      Pressable,
      Image,
    } from 'react-native';
  
    import React, {useState} from 'react';
    import {Loading,CustomTextInput,CustomButton} from '../components';
    
  const LoginPage = ({navigation}) => {//navigation kullanacam dedim
  //useState yapısıyla formlardan girilen bilgileri alıp kullanabiliriz.
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState('')
    const [isLoading, setIsLoading] = useState(false)
  
  
  
    //console.log(email)
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {result}</Text>
      <Image 
      
      source={require('../../assets/images/login.png')}
      style={styles.image}/>

        <CustomTextInput
          title="Email"
          isSecureText={false}
          handleOnChangeText={setEmail}//içindeki yazıyı değiştircek yapı
          handleValue={email}//içinde gözükecek yazı
          handlePlaceholder='Enter Your Email'
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={setPassword}//içindeki yazıyı değiştircek yapı
          handleValue={password}//içinde gözükecek yazı 
          handlePlaceholder='Enter Your Password '
        />
       
        <CustomButton
          buttonText = "Login"
          setWidth='80%'
          handleOnPress={()=> setIsLoading(true)}
          buttonColor="rebeccapurple"
          pressedButtonColor="gray"
        />
         <CustomButton
          buttonText = "Sign Up"
          setWidth='30%'
          handleOnPress={()=> navigation.navigate('Signup')}
          buttonColor="gray"
          pressedButtonColor="darkgray"
        />


      
        {/* Eğer isloading true ise changeloading'i çağır ve false yap */}
      {isLoading ? <Loading changeIsLoading={()=> setIsLoading(false)}/> : null}
  
      
      </View>
      
    );
  }

  export default LoginPage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d7d0c8",
      alignItems:'center',
      justifyContent:'center',
    },
    image:{
      width:100,
      height:100,
      marginBottom:20,
    },
    welcome:{
      fontSize:30,
      fontWeight:'bold',
      marginBottom:30,
    },
    signupButton:{
      width:'30%',
      height:40,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
      //backgroundColor:'rebeccapurple',
    } 
  
  });
  