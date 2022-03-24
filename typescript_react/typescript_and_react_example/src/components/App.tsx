import React, { Component } from 'react'
import { User } from '../models/Models';
import { AuthServices } from '../services/AuthServices';
import { Login } from './Login';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import History from '../utilities/History';
import Profile from './Profile';

interface IAppState {
  User: User | undefined;
}

export class App extends Component<{}, IAppState> {

  private AuthServices: AuthServices = new AuthServices();

  constructor(props: any) {
    super(props);

    this.state = {
      User: undefined
    };

    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    this.setState({
      User: user
    });
    console.log('User set : '  + user);
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar user={this.state.User} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login AuthServices={this.AuthServices} setUser={this.setUser}/>}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;