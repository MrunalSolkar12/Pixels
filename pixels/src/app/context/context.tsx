"use client";
import { createContext,ReactNode  } from "react";
import { reducer, intialstate, swwipeimgInitialstate } from "./reducer";
import { imgreducer,imgLoadInitialstate,swipeimgreducer } from "./reducer";
import { useReducer } from "react";

interface UserContextType {
  state: boolean; // replace YourStateType with the actual type of your state
  dispatch: React.Dispatch<unknown>; // replace YourActionType with the actual type of your actions
}

interface SwipeImgContextType {
  swipeimgstate: boolean; // replace YourStateType with the actual type of your state
  swipeimgdispatch: React.Dispatch<unknown>; // replace YourActionType with the actual type of your actions
}

interface ImageContextType {
  imgstate: boolean; // replace YourStateType with the actual type of your state
  imgdispatch: React.Dispatch<unknown>; // replace YourActionType with the actual type of your actions
}

interface UserContextProviderProps {
    children: ReactNode;
  }


export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const ImageContext = createContext<ImageContextType | undefined>(
  undefined
);

export const SwipeImgContext = createContext<SwipeImgContextType | undefined>(
  undefined
);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);
  const [swipeimgstate,swipeimgdispatch] = useReducer(swipeimgreducer,swwipeimgInitialstate);
  const [imgstate,imgdispatch] = useReducer(imgreducer,imgLoadInitialstate);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
      <SwipeImgContext.Provider value={{ swipeimgstate, swipeimgdispatch }}>
        <ImageContext.Provider value={{ imgstate, imgdispatch }}>
        {children}
        </ImageContext.Provider>
        </SwipeImgContext.Provider>
      </UserContext.Provider>
    </>
  );
};
