import { StyleSheet, Text, View, SafeAreaView,Image,Pressable} from 'react-native'
import React,{useState} from 'react'
import {CustomTextInput,CustomButton} from '../components'

const SignupPage = ({navigation}) => {

  const [name, setName] = useState("")//local olarak inputa girilen bilgileri saklamamkızı sağlar.
  const [email, setEmail] = useState("")//local olarak inputa girilen bilgileri saklamamkızı sağlar.
  const [password, setPassword] = useState("")//local olarak inputa girilen bilgileri saklamamkızı sağlar.


  return (//safeareaview çentikli ekranlarda yukarı kayma olmasın diye kullanılır.
    <SafeAreaView style={styles.container}>
    <View style={styles.title}>
      <Image style={styles.image} source={require('../../assets/images/signup.png')} />
      <Text style={styles.signUp}>Sign Up</Text>

    </View>
    

    <View style={styles.textInputContainer}>
      <CustomTextInput
          title={"Name"}
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceholder="Enter Your Name"
        />

        <CustomTextInput
          title={"Email"}
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceholder="Enter Your Email"
        />
        <CustomTextInput
          title={"Password"}
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password }
          handlePlaceholder="Enter Your Password"
        />

    </View>
      
      <View style={styles.signUpOptions}>
        <CustomButton
        
          buttonText="Sign Up"
          setWidth="80%"
          buttonColor="rebeccapurple"
          pressedButtonColor="gray"
          handleOnPress={()=>console.log(name,email,password)}

        />

        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text style={{fontWeight:'bold'}}>Already have an account? Login</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  )
}

export default SignupPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  signUp:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:30,
  },
  textInputContainer:{
    width:'100%',
    alignItems:'center',
    flex:2,
    paddingVertical:20,
    justifyContent:'space-between'
  },
  title:{
    flex:2,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  signUpOptions:{
    flex:2,
    width:'100%',
    alignItems:'center',
    justifyContent:'space-between'
  },
  image:{
    width:100,
    height:100,
    marginBottom:20,
  },

})