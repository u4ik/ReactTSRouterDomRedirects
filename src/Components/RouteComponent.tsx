import React from "react";
import { Redirect } from "react-router-dom";
import "./Routes/Routes.css";

type RouteStates = {
  redirect: string | null;
};

type RouteProps = {
  //   testState: string;
  //   setTestState: (e: any) => void;
  //   //   testState2: string,
  //   //   stateSetter: (e: any) => void;
  //   changeColor: () => void;
  path: string;
  setPath: (e: string) => void;
};

class RouteComponent extends React.Component<RouteProps, RouteStates> {
  constructor(props: RouteProps) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
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
        <h1 className="path">{this.props.path}</h1>
        <h1>Route</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button
            className="routeButtons"
            onClick={() => {
              this.setState({
                redirect: "/cat",
              });
              this.props.setPath("/cat");
            }}
          >
            To Cat
          </button>

          <button
            className="routeButtons"
            onClick={() => {
              this.setState({
                redirect: "/dog",
              });

              this.props.setPath("/dog");
            }}
          >
            To Dog
          </button>


          <button
            className="routeButtonsRed"
            onClick={() => {
              this.setState({
                redirect: "/404",
              });

              this.props.setPath("/404");
            }}
          >
            To 404 Error
          </button>
        </div>
      </div>
    );
  }
}

export default RouteComponent;
