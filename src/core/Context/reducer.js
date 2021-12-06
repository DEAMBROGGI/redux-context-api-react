export const initialState = {
    arrayAxiosContext:[],
    textInput:"",
}

export const actionTypes = {
    ADD_ARRAY_CONTEXT:"ADD_ARRAY_CONTEXT",
    ADD_TEXT:"ADD_TEXT",
   
}

const reducer =(state, action ) =>{

    console.log(action);

switch(action.type){
    
    case "ADD_ARRAY_CONTEXT":
        return{
            ...state,
            arrayAxiosContext: action.arrayAxiosContext
        }
        case "ADD_TEXT":
        return{
            ...state,
            textInput:action.textInput,       
        } 
                                                                  
        default: return state;
}
}
export default reducer