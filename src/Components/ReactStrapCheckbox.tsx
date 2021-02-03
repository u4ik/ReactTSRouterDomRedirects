import React from "react";
import { Input, Label } from "reactstrap";

type CheckStates = {
  avail: any;
  resultArray: any;
};

class ReactStrapCheckbox extends React.Component<{}, CheckStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      //default new array
      avail: [
        { id: 1, day: "Sunday", isChecked: false },
        { id: 2, day: "Monday", isChecked: false },
        { id: 3, day: "Tuesday", isChecked: false },
        { id: 4, day: "Wednesday", isChecked: false },
        { id: 5, day: "Thursday", isChecked: false },
        { id: 6, day: "Friday", isChecked: false },
        { id: 7, day: "Saturday", isChecked: false },
      ],
      //get array and use this to update
      resultArray: [],
    };
  }
  //Creating availability sched
  handleSubmit = async () => {
    const response = await fetch("http://localhost:9080/check/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avail: this.state.avail,
      }),
    });
    const result = await response.json();
    console.log(result);
  };
  //All Clicked new
  handleAll(e: any) {
    // console.log(e);
    // console.log(e.target.value);
    // console.log(e.target.type);
    let avail = this.state.avail;
    avail.forEach((item: any) => (item.isChecked = e.target.checked));
    this.setState({ avail: avail });
    // this.setState({})
  }
  //Click single Create
  handleCheckChieldElement = (event: any) => {
    console.log(event.target.value);
    let avail = this.state.avail;

    avail.forEach((item: any) => {
      if (item.day === event.target.value) {
        item.isChecked = event.target.checked;
      }
    });
    this.setState({
      avail: avail,
    });
    console.log(avail);
  };

  //All Clicked update
  handleAllUpdate(e: any) {
    // console.log(e);
    // console.log(e.target.value);
    // console.log(e.target.type);
    let resultArray = this.state.resultArray;
    resultArray.forEach((item: any) => (item.isChecked = e.target.checked));
    this.setState({ resultArray: resultArray });
    // this.setState({})
  }
  //updating handle check
  handleCheckChieldElementUpdate = (event: any) => {
    console.log(event.target.value);
    let avail = this.state.avail;

    this.state.resultArray?.forEach((item: any) => {
      if (item.day === event.target.value) {
        item.isChecked = event.target.checked;
      }
    });
    this.setState({
      resultArray: this.state.resultArray,
    });
    console.log(avail);
  };

  //Get Single id of 3 from avail
  getAvail = async () => {
    const response = await fetch("http://localhost:9080/check/one/3", {
      method: "GET",
    });
    const result = await response.json();
    console.log(result[0].availability);
    this.setState({ resultArray: result[0].availability });
  };

  //Update Single id of 3 from avail
  updateAvail = async () => {
    const response = await fetch("http://localhost:9080/check/update/3", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        availability: this.state.resultArray,
      }),
    });
    const result = await response.json();
    console.log(result);
  };

  componentDidMount() {
    this.getAvail();
  }

  render() {
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
        <h1>Checkboxes</h1>
        {/* <h1>State & setState as props</h1>
        <h4>Console Logging the state</h4> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "40%",
            marginRight: "40%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Label htmlFor="all">All</Label>
            <Input
              id="all"
              type="checkbox"
              onChange={(e) => {
                this.handleAll(e);
              }}
            />
          </div>

          {this.state.avail.map((i: any, index: number) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Label htmlFor={i.day}>{i.day}</Label>
                <Input
                  id={i.day}
                  type="checkbox"
                  name={i.day}
                  value={i.day}
                  checked={i.isChecked}
                  onChange={(e) => {
                    this.handleCheckChieldElement(e);
                  }}
                />
              </div>
            );
          })}
          <button onClick={() => this.handleSubmit()}>Send!</button>

          <div style={{ border: "" }}>
            <h1>Id of 3's availability.</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Label htmlFor="all">All</Label>
              <Input
                id="all"
                type="checkbox"
                onChange={(e) => {
                  this.handleAllUpdate(e);
                }}
              />
            </div>
            {this.state.resultArray?.map((i: any, index: number) => {
              return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Label htmlFor={i.day}>{i.day}</Label>
                  <Input
                    id={i.day}
                    type="checkbox"
                    name={i.day}
                    value={i.day}
                    checked={i.isChecked}
                    onChange={(e) => {
                      this.handleCheckChieldElementUpdate(e);
                    }}
                  />
                </div>
              );
            })}
            <button
              onClick={() => {
                this.updateAvail();
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactStrapCheckbox;
