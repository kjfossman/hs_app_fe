import React, { Component } from 'react';
import { connect } from 'react-redux';

class usersContainer extends Component {
    render() {
        
        let users = this.props.users.map(e => <div key={e.name}>{e.email}</div>)
        return (
            <div>
                {users}
            </div>
        );
    }
}

const mapStateToProps = state => {
  
    return {
      users: state.users
    }
  }

export default connect(mapStateToProps)(usersContainer);