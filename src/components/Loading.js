import { StyleSheet, Text, View, ActivityIndicator, Pressable} from 'react-native'
import React from 'react'

const Loading = (props) => {
  return (
    <View style={styles.container}>

        <Pressable 
        onPress={()=> props.changeIsLoading()}//propslarla ana maine bilgi gönderiyorum. Çarpıya tıklarsam ana mainde bu fonksuyonu çalıştır dedım
        style={[{}, styles.closeButtonContainer]}>
            <Text style={styles.closeButton}>X</Text>
        </Pressable>

        <ActivityIndicator 
        size={'large'} 
        
        marginTop={10}
        />
      <Text style={styles.loginText}>Loading..</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rebeccapurple',
        alignItems:'center',
        justifyContent:'center',
        
    },
    loginText:{
        fontSize:16,
        fontWeight:'bold',
        margin:10,
        color:'white',
    },
    closeButtonContainer:{
        backgroundColor:'white',
        width:50,
        height:50,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top:50,
        right:30
    },
    closeButton:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',

    }
})