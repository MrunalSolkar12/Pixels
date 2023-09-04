"use client"
import { createContext,useContext } from "react";
import {reducer,initialState} from "../Reducer/reducer";
import { PageReducer,initialState1 } from "../Reducer/PageReducer";
import { useReducer } from "react";

export const UserContext =  createContext();
export const UserContext1 =  createContext();

export const UserContextProvider = ({ children }) => {
    //const [color, setColor] = useState('red');
    const [state,dispatch] = useReducer(reducer,initialState);
    const [state1,dispatch1] = useReducer(PageReducer,initialState1);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <UserContext1.Provider value={{ state1, dispatch1 }}>
                {children}
            </UserContext1.Provider>
        </UserContext.Provider>
    );
};

//export const useUserContext = ()=> useContext(UserContext);