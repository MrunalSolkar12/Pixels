export const initialState1 = 6;
export const PageReducer = (state,action)=>{
    if(action.type === 'PAGE'){
        return action.payload;
    }
    return state;
}