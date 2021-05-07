import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login";
import home from "./loginSuccess";
import about from "./component/about";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <Switch>
        <Route key={this.state.count} exact path="/" component={Login} />
        <Route path="/home" component={home} />
        <Route exact path="/about" component={about} />
        <Redirect from="/" to="/" />
      </Switch>
    );
  }
}

export default App;
