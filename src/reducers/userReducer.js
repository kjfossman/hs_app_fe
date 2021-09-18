const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_USERS':
            return state

        case 'SHOW_USERS':
            return action.users

        case 'ADD_USER':
            debugger
            if(state.find(obj => obj.id === action.res.user.id)){
                return state 
            }else{
                return [action.res.user, ...state]
            }
            

      default:
        return state;
    }
  }
  
  export default userReducer;