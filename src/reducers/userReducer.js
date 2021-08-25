const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_USERS':
            return state

        case 'ADD_USERS':
            return action.users

      default:
        return state;
    }
  }
  
  export default userReducer;