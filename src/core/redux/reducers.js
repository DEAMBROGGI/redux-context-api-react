export const initialStateRedux = {
    arrayAxiosRedux:[], 
}

export const actionTypes = {
    ADD_ARRAY_REDUX:"ADD_ARRAY_REDUX",
    CALL_SEARCH:"CALL_SEARCH", 
}

export default function data (state = initialStateRedux, action) {

    console.log(action);

switch(action.type){
    case "ADD_ARRAY_REDUX":
        return{
            ...state,
            arrayAxiosRedux: action.arrayAxiosRedux
        }                                            
        default: return state;
};
}
