const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOADING_USERS':
            return state

        case 'SHOW_USERS':
            return action.users

        case 'ADD_USERS':
            return [action.user, ...state]

      default:
        return state;
    }
  }
  
  export default userReducer;