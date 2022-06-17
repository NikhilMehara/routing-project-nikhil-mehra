import { createContext, useReducer } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    
const AuthReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_SUCESS":{
            return{
                ...state,
                isAuth:true,
                token: action.payload.token
            }
        }
        case "LOGOUT_SUCESS":{
            return{
                ...state,
                isAuth:false,
                token: null
            }
        }
        default : {
            return state;
        }
    }
}

  const [state,dispatch] = useReducer(AuthReducer,{
    isAuth:false,
    token: null
})

    return <AuthContext.Provider value={[state,dispatch]}>
        {children}
    </AuthContext.Provider>
}