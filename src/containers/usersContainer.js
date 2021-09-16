import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

function UsersContainer() {
        let users = useSelector(state => state.users)
        
        users = users.map(e => <div key={e.id}>{e.email}</div>)
        return (
            <div>
                <h1>{users}</h1>
            </div>
        );
    
}

// const mapStateToProps = state => {
  
//     return {
//       users: state.users
//     }
//   }


export default UsersContainer
// export default connect(mapStateToProps)(usersContainer);