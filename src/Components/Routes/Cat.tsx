import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

type CatStates = {
  redirect: string | null;
};

type CatProps = {
  //   testState: string;
  //   setTestState: (e: any) => void;
  //   //   testState2: string,
  //   //   stateSetter: (e: any) => void;
  //   changeColor: () => void;
  path: string;
  setPath: (e: string) => void;
};

class Cat extends React.Component<CatProps, CatStates> {
  constructor(props: CatProps) {
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
          //   paddingBottom: "20vh",
          border: "1px solid white",
          margin: "5%",
          borderRadius: "15px",
        }}
      >
        <h1 className="path">{this.props.path}</h1>
        <h1>Cat Route!</h1>

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

          <div style={{ display: "flex", flexDirection: "row" }}>
          
            <img
              className="routeImgs"
              src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
              alt="cat"
            />
            <img
              className="routeImgs"
              src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
              alt="cat"
            />
            <img
              className="routeImgs"
              src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
              alt="cat"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cat;
