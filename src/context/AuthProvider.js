import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast } from "react-hot-toast";
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})
    let token = localStorage.getItem("token")
     if(!token){
        token = "sdlkfhsdlkfhslka"
     }
     useEffect(()=>{
        axios.get('https://simple-user-management-task.vercel.app/api/v1/user/me',{
          headers: { Authorization: `Bearer ${token}` }
      })
      .then(response=>{
          console.log(response?.data?.others );
          setUser(response?.data?.others) 
      })
      .catch(err=>{
          toast.error(<h1>{err.message}</h1>)
      })
      },[token])
    const authInfo = {token,user,setUser}
    return(
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
        );
};

export default AuthProvider;