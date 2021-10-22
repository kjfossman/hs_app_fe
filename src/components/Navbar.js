import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div>

                <button className="btn"><NavLink 
                    to="/home" exact
                    className="inactive"
                    activeClassName={ "active" }
                    // inactiveStyle={{color: "blue"}}
                    ><b>Home</b>
                </NavLink></button>

                 <button className="btn"><NavLink 
                    to="/users" exact
                    className="inactive"
                    ><b>Users</b>
                </NavLink></button> 

                <button className="btn"><NavLink 
                    to="/exercises" exact
                    className="inactive"
                    ><b>Exercises</b>
                </NavLink></button> 

            
            </div>
        );
    }
}

export default Navbar;