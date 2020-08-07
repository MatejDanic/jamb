import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardAdmin from "./components/board-admin.component";
import Game from "./components/jamb/game.component";


class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = {
      version: "Offline",
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        version: "Online",
        currentUser: user,
        showAdminBoard: user.roles.includes("ADMIN")
      });
    }
  }

  logout() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;
    return (
      <Router>
        <div>
          <title>Jamb</title>
          <nav className="navbar navbar-expand navbar-dark bg-dark" style={{ height: '32px' }}>

            <div className="navbar-nav mr-auto">
            <Link to={"/"} className="nav-link">
                    Jamb
        </Link>
              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
        </Link>
                </li>
              )}

            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logout}>
                    Logout
                 </a>
                </li>
              </div>
            ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
            </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Register
            </Link>
                  </li>
                </div>
              )}
          </nav>

          {/* <div>
            {currentUser ? (
              <div>
                <JambReal />
              </div>
            ) : (
                <div>
                  <JambFake />
                </div>
              )}
          </div> */}

          <div>
            <Switch>
              <Route exact path="/" component={() => <Game user={currentUser} />}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
