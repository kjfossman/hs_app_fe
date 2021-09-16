const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return [action.user.id]

        case 'LOGOUT':
            return []

      default:
        return state;
    }
  }
  
  export default userReducer;