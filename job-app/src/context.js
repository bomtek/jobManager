import React,{ useContext,useReducer } from "react";
import {reducer} from "./reducer";





const AppContext = React.createContext();

const AppProvider = ({children}) => {


  const initialState = {
     job:{
    title: "",
    organisation: "",
    website: "",
    status: "",
    catagory: "",
    dueDate: "",
    discription: "",
    experience: 0,
    skills: [],
    }
    
}

const [state, dispatch] = useReducer(reducer, initialState)


const createJob = (e) => {
    dispatch({type:"CREATE_JOB",payload:e})
}

const storeJob = (e) => {
    dispatch({type: "SUBMIT_JOB_MONGO",payload:e})
}



return( <AppContext.Provider 
    value= {
        {...state,
        createJob,
        storeJob
    
    }
        
        
        }>
        {children}
    </AppContext.Provider>
    )
}



const useGlobleContext= () => {
    return useContext(AppContext)
};

export {useGlobleContext};
export {AppProvider};