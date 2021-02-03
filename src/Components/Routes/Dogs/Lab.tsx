import React from "react";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

type LabStates = {
  redirect: string | null;
};

type LabProps = {
  //   testState: string;
  //   setTestState: (e: any) => void;
  //   //   testState2: string,
  //   //   stateSetter: (e: any) => void;
  //   changeColor: () => void;
  path: string;
  setPath: (e: string) => void;
};

class Lab extends React.Component<LabProps, LabStates> {
  constructor(props: LabProps) {
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
                redirect: "/dog",
              });
              this.props.setPath("/dog");
            }}
          >
            Back
          </button>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>Lab</h1>
            <img
              className="routeImgs"
              src="https://geniusvets.s3.amazonaws.com/gv-dog-breeds/labrador-retriever-1.jpg"
              alt="dog"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Lab;
