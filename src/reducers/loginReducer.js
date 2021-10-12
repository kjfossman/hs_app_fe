const userReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return  {
                        user: action.res.data.user,
                        profile: action.res.data.profile
                    }

        case 'LOGOUT':
            return false

      default:
        return state;
    }
  }
  
  export default userReducer;