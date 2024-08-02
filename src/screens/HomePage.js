import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { collection, addDoc,getDocs, doc, deleteDoc,updateDoc } from "firebase/firestore"; //firebase veri ekleme ve çekme 
import { db } from '../../firebaseConfig';
import { CustomButton } from '../components';


const HomePage = () => {
//dokumantasyonu takip et.
const [data, setData] = useState([])
const [isSaved, setIsSaved] = useState(false)

console.log("data :", data)

useEffect(()=> {//ekran açılınca veriler gelsin dedik.
  getData()
},[isSaved])//issaved her değiştiğinde çalış dedik.


//send data to firebase
  const sendData = async ()=>{
    try {
      const docRef = await addDoc(collection(db, "ReactLesson"), {
        title: "Zor",
        content: "Öğrenmeye çalışıyorum",
        lesson: 15
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  //get data to firebase
  const getData = async ()=>{

    const allData=[]

    try {
      const querySnapshot = await getDocs(collection(db, "ReactLesson"));
      querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
        allData.push({...doc.data(),id:doc.id})//id ekledik 
        
    });
    setData(allData) 
    } catch (error) {
      console.log(error)
    }
    
  }

  //delete data to firebase
    //get data to firebase
    const deleteData = async (value)=>{
      try {
        await deleteDoc(doc(db, "ReactLesson", value ));
        console.log("Delete Successful")
      } catch (error) {
        console.log(error)
      }
      
    }

    //update
    const updateData = async () =>{
      const washingtonRef = doc(db, "ReactLesson", "Ftd4wN4aZjgulv5da4xe");

    
      await updateDoc(washingtonRef, {
      title: "kolay"
    });
    }

  return (
    <View style={styles.container}>
      

      {data.map((value,index)=>{
        return(
        
      <Pressable 
        onPress={()=>[deleteData(value.id),setIsSaved(isSaved === false ? true : false)]}
        key={index}>
        <Text>{index}</Text>
        <Text>{value.id}</Text>
        <Text>{value.title}</Text>
        <Text>{value.content}</Text>
        <Text>{value.lesson}</Text>
      </Pressable>
    
        )
      })}
      

      <CustomButton
          buttonText = "Save"
          setWidth='40%'
          handleOnPress={()=>{sendData(), setIsSaved(isSaved===false ? true : false)}}
          buttonColor="rebeccapurple"
          pressedButtonColor="gray"
        />

      <CustomButton
          buttonText = "Get Data"
          setWidth='40%'
          handleOnPress={getData}
          buttonColor="orange"
          pressedButtonColor="gray"
        />
         <CustomButton
          buttonText = "Delete Data"
          setWidth='40%'
          handleOnPress={deleteData}
          buttonColor="red"
          pressedButtonColor="gray"
        />
           <CustomButton
          buttonText = "Update Data"
          setWidth='40%'
          handleOnPress={updateData}
          buttonColor="green"
          pressedButtonColor="gray"
        />

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor: "#d7d0c8",
}

}) 