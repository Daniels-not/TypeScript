import React, { Component } from 'react'
import { User } from '../models/Models';
import { NavLink } from 'react-router-dom'

export class NavBar extends Component<{ user: User | undefined }> {
  render() {

    let logInLogOut: any;

    if(this.props.user) {
        logInLogOut = <NavLink to="/">Home</NavLink>
    }else {
        logInLogOut = <NavLink to="/login">Log in</NavLink>
    }

    return (
      <div>
        <header className="header">
        <a className="logo" href=".page-top">TypeLogin 🐉</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon"><span className="navicon"></span></label>
          <ul className='menu'>
            <li className='link link-theme link-arrow'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='link link-theme link-arrow'>
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li className='link link-theme link-arrow'>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}

export default NavBar;