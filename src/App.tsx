import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import RouteComponent from "./Components/RouteComponent";

import Cat from "./Components/Routes/Cat";
import Dog from "./Components/Routes/Dog";

import Shepherd from "./Components/Routes/Dogs/Shepherd";
import Lab from "./Components/Routes/Dogs/Lab";
import Retriever from "./Components/Routes/Dogs/Retriever";

import Error from "./Components/Routes/404/404";

type AppStates = {
  path: string;
  setPath: (e: string) => void;
};

class App extends React.Component<{}, AppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      path: window.location.pathname,
      setPath: (e) => {
        this.setState({
          path: e,
        });
      },
    };
  }

  render() {
    return (
      <div
        className="App"
        style={{
          background: "rgba(0,0,0,.6)",
          height: "100%",
          minHeight: "100vh",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/dog/shepherd">
              <Shepherd path={this.state.path} setPath={this.state.setPath} />
            </Route>

            <Route exact path="/dog/lab">
              <Lab path={this.state.path} setPath={this.state.setPath} />
            </Route>

            <Route exact path="/dog/retriever">
              <Retriever path={this.state.path} setPath={this.state.setPath} />
            </Route>

            <Route exact path="/dog">
              <Dog path={this.state.path} setPath={this.state.setPath} />
            </Route>

            <Route exact path="/cat">
              <Cat path={this.state.path} setPath={this.state.setPath} />
            </Route>

            <Route exact path="/">
              <RouteComponent
                path={this.state.path}
                setPath={this.state.setPath}
              />
            </Route>

            <Route path="*">
              <Error setPath={this.state.setPath} path={this.state.path} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
