const userReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return action.res.data.user

        case 'LOGOUT':
            return false

      default:
        return state;
    }
  }
  
  export default userReducer;