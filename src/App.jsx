import React from "react";
import { ProfileWithConnect } from "./Profile";
import { HomeWithConnect } from "./Home";
import { Map } from "./Map";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

class App extends React.Component {
  state = { currentPage: "map" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "home" });
    }
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
            <Switch>
              <Route exact path="/" component={HomeWithConnect} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithConnect} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
