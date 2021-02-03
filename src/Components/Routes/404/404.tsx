import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
type ErrorStates = {
  redirect: string | null;
};

type ErrorProps = {
  path: string;
  setPath: (e: string) => void;
};

class Error extends React.Component<ErrorProps, ErrorStates> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div
        className=""
        style={{
          paddingTop: "10vh",
          paddingBottom: "20vh",
          border: "1px solid white",
          margin: "5%",
          borderRadius: "15px",
        }}
      >
        <h1>404 not found..</h1>

        <button
          className="backButtons"
          onClick={() => {
            this.setState({
              redirect: "/",
            });
            this.props.setPath("/");
          }}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Error;
