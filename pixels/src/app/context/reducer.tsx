export const intialstate:boolean | null=null;
export const reducer=(state:boolean,action:any)=>{
    if(action.type === "USER"){
        return action.payload;
    }
    return state;
}

export const swwipeimgInitialstate:boolean | null=false;
export const swipeimgreducer = (state:boolean,action:any)=>{
    if(action.type ==="SWIPEIMG"){
        return action.payload;
    }
    return state;
}

export const imgLoadInitialstate:boolean | null=false;
export const imgreducer = (state:boolean,action:any)=>{
    if(action.type ==="IMGLOAD"){
        return action.payload;
    }
    return state;
}