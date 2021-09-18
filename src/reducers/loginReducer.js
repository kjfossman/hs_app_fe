const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return [action.res.user.id]

        case 'LOGOUT':
            return []

      default:
        return state;
    }
  }
  
  export default userReducer;