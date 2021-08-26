import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>

                <button><NavLink 
                    to="/home" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>Home</b>
                </NavLink></button>

                 <button><NavLink 
                    to="/users" exact
                    activeStyle={{
                        color: 'red'
                    }}
                    ><b>Users</b>
                </NavLink></button> 

            
            </div>
        );
    }
}

export default Navbar;