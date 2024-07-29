import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title,isSecureText,handleOnChangeText,handleValue,handlePlaceholder}) => {
  return (
    <View style={styles.inputContainer}>
    <Text style={styles.TextInputBox}>{title}</Text>
    <TextInput
    
    secureTextEntry={isSecureText}
    placeholder={handlePlaceholder}
    style={styles.textInputStyle}
    onChangeText={handleOnChangeText}
    value={handleValue} 
    />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer:{
        width:'80%',
  
      },
      textInputStyle:{
        borderBottomWidth:0.5,
        width:'100%',
        height:50,
        borderRadius:5,
        marginVertical:10,
        textAlign:'center',
      },
      TextInputBox:{
        fontWeight:'bold',
        alignSelf:'flex-start'
      }
})