"use client";
import React , {Children, createContext , useContext , useState} from "react";

const AuthContext = createContext({
   modal: null,
   openLogin: () => {},
   openSignUp: () => {},
   closeModal: () => {}
});

export const useAuth = ()=> useContext(AuthContext);

export const AuthProvider = ({children})=>{
   const [modal , setModal] = useState(null);

   const openLogin = ()=> { setModal('login');}
   const openSignUp = ()=> setModal('signup');
   const closeModal = ()=>setModal(null);

   console.log("Inside AuthProvider: Modal value is", modal);

   return(
     <AuthContext.Provider  value={{modal , openLogin , openSignUp , closeModal}}>
        {children}
     </AuthContext.Provider>
   );
};