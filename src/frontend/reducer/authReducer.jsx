

export const initialState = {
    user : null, 
    token : null, 
    isAuthenticated : false
}
//what is action.payload and action.type
//component mount
export const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN" : return {
            ...state,
            user : action.payload.user,
            token : action.payload.token,
            isAuthenticated : true
        }; 
        case "LOGOUT": return {
            ...state, 
            user : action.payload.user,
            token : action.payload.token,
            isAuthenticated : false
        }
        case "SIGNUP":
            return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    isAuthenticated: true,
  };
        default : 
        return state;
    }
}
