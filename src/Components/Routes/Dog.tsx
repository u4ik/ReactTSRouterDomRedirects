import React from "react";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

type DogStates = {
  redirect: string | null;
};

type DogProps = {
  //   testState: string;
  //   setTestState: (e: any) => void;
  //   //   testState2: string,
  //   //   stateSetter: (e: any) => void;
  //   changeColor: () => void;
  path: string;
  setPath: (e: string) => void;
};

class Dog extends React.Component<DogProps, DogStates> {
  constructor(props: DogProps) {
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
          //   paddingBottom: "20vh",
          border: "1px solid white",
          margin: "5%",
          borderRadius: "15px",
        }}
      >
        <h1 className="path">{this.props.path}</h1>
        <h1>Dog Route!</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // marginLeft: "30%",
            // marginRight: "30%",
            paddingBottom: "5%",
          }}
        >
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
                this.setState({ redirect: "/dog/shepherd" });
                this.props.setPath("/dog/shepherd");
              }}
            >
              Shepherd
            </button>

            <button
              className="routeButtons"
              onClick={() => {
                this.setState({ redirect: "/dog/lab" });
                this.props.setPath("/dog/lab");
              }}
            >
              Lab
            </button>

            <button
              className="routeButtons"
              onClick={() => {
                this.setState({ redirect: "/dog/retriever" });
                this.props.setPath("/dog/retriever");
              }}
            >
              Retriever
            </button>

  
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
