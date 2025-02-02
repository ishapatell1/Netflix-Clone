export const postReducer = (state, action)=>{
    switch(action.type){
        case "ADD_POST":
            return{...state,posts:[action.payload,...state.posts]}
        case "SET_POST":
            return{...state,posts:action.payload}
        default : 
            return state;
    }
}