const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_USERS':
            return state

        case 'SHOW_USERS':
            return action.users

        case 'ADD_USER':
            if(state.find(obj => obj.id === action.res.data.user.id)){
                return state 
            }else{
                return [action.res.data.user, ...state]
            }
            
      default:
        return state;
    }
  }
  
  export default userReducer;