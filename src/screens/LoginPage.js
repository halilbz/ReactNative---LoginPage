
import { 
    ActivityIndicator,
     StyleSheet,
      Text, 
      View, 
      TextInput,
      Pressable,
      Image,
    } from 'react-native';
  
    
    import {Loading,CustomTextInput,CustomButton} from '../components';
    import {login,autoLogin} from '../redux/userSlice';//userslice dan gelen logini ekledim.

    import { useSelector,useDispatch } from 'react-redux';//sliceleri kullanmak için
    import { setIsLoading,} from '../redux/userSlice';
    import React,{ useState,useEffect } from 'react';
    

  const LoginPage = ({navigation}) => {//navigation kullanacam dedim
  //useState yapısıyla formlardan girilen bilgileri alıp kullanabiliriz.
    
    const [email,setEmail] = useState('');
    const [password,setPassword ] = useState('');

  
    

    //userSlice içerisindeki verilerin okunması
    const {/* email, password, */ isLoading,error} = useSelector((state)=>state.user)

   
    //userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
    const dispatch = useDispatch()
  
    //Kullanıcı daha önce giriş yaptıysa kontrol et ve oto giriş yap
    useEffect(() => {
      dispatch(autoLogin())//
    }, [])
  
    //console.log(email)
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
      <Image 
      
      source={require('../../assets/images/login.png')}
      style={styles.image}/>

        <CustomTextInput
          title="Email"
          isSecureText={false}
          handleOnChangeText={(text)=> setEmail(text.toLowerCase())}//içindeki yazıyı değiştircek yapı
          handleValue={email}//içinde gözükecek yazı
          handlePlaceholder='Enter Your Email'
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={(password)=> setPassword(password)}//içindeki yazıyı değiştircek yapı
          handleValue={password}//içinde gözükecek yazı 
          handlePlaceholder='Enter Your Password '
        />
       <Text>{error}</Text>
        <CustomButton
          buttonText = "Login"
          setWidth='80%'
          handleOnPress={()=> dispatch(login({email,password}))}
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
      {isLoading ? <Loading changeIsLoading={()=> dispatch(setIsLoading(false))}/> : null}
  
      
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
  