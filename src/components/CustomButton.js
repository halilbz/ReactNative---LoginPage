import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText,setWidth,handleOnPress,buttonColor,pressedButtonColor}) => {
  return (
    <Pressable 
      onPress={()=> handleOnPress()}
      style={({pressed}) => [{
        //burada iki ayrı style yapısı kullandık. Style yapılarında dizi şeklinde birden fazla style eklemesi yapabiliriz. Aşağıda da pressable yapısının pressed özelliğini kullandık.
      backgroundColor: pressed ? pressedButtonColor : buttonColor,
      width: setWidth,
      
      },styles.button]  }>
      
        <Text style={styles.buttonText}>
          {buttonText}
        </Text>
      </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({

    button:{
        
        height:50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15, 
        //backgroundColor:'rebeccapurple',
        
    
      },
      buttonText:{
        color:'white',
        fontSize:15 ,
        fontWeight:'bold',
      }, 
})