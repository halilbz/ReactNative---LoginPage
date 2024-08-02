//Kullanıcı giriş işlemlerini yapabilmek için oluşturdum.
//redux yapısı globalde tututalşan veriler anlamına gelir

                    //cevap beklerken 3 cıktı verir "yükleniyor-yüklendi-hata"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getAuth,signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

//kendi kendini export ediyorum ki loginpagede kullnacam
export const login = createAsyncThunk('user/login', async({email,password}) =>{//geç gelen ceavpalar
    try {
        const auth = getAuth() //firebase deki auth dosyamızı kontrol et. başta oluşturduğumuz confige bakıyor 
        const userCredential = await signInWithEmailAndPassword(auth,email,password)//yetkim olan auth dosyasında sana gönderdiğim email ve pass kontrolünü yap.

        const user = userCredential.user;//credentialdan user bilgimi al.
        const token = user.stsTokenManager.accessToken;//user bilgilerimden de token u al

        const userData ={
            token,//userdataya user ve token bilgilerimi verdim ve return ettim
            user: user,
        }

        await AsyncStorage.setItem("userToken", token) //Oto giriş yapabilmek telefonun ön belleğine token kaydettim
        
        return userData;

    } catch (error) {
        console.log("UserSlice 21. Line", error);
        throw error
    }
})

//Kullanıcı otamatik giriş işlemleri.

export const autoLogin = createAsyncThunk('user/autoLogin',async() =>{
    try {
        const token = await AsyncStorage.getItem("userToken")

        if (token) {
            return token
        } else {
            throw new Error("User not found!")
        }

    } catch (error) {
        throw error
    }
})


const initialState ={
    /* email: null,
    password: null, */
    isLoading: false,
    isAuth: false,
    token:null,
    user:null,
    error:null,
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setEmail: (state,action)=>{//state: initaldaki veriler, action da kullanıcının gönderdiği veriler.
            const loverCaseEmail = action.payload.toLowerCase()
            state.email = loverCaseEmail
        },
        setPassword: (state,action)=>{
            state.password = action.payload
        },
        setIsLoading: (state,action)=>{
            state.isLoading = action.payload
        },

       /*  setLogin: (state) =>{
            if((state.email === state.users.userEmail) && (state.password === state.users.userPassword)) {
                    
                    state.isAuth = true
                    console.log(true)
            }   
            else{
                console.log(false)
            }
        } */

    },
    extraReducers:(builder) =>{
        builder
            .addCase(login.pending,(state)=>{
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isAuth = true; 
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            })

            .addCase(autoLogin.pending,(state)=>{
                state.isLoading = true;
                state.isAuth = false;
               
            })
            .addCase(autoLogin.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isAuth = true;
                state.token = action.payload;
            })
            .addCase(autoLogin.rejected,(state,action)=>{
                state.isLoading = false;
                state.isAuth = false;
                state.token = null;
            })
    }
})

export const {setEmail, setPassword, setIsLoading} = userSlice.actions
export default userSlice.reducer