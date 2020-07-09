import React, { Component } from "react";

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <>
      <form onSubmit={this.formSubmit}>
      <h3>Is there a visible trailhead?</h3>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Yes"
              checked={this.state.selectedOption === "Yes"}
              onChange={this.onValueChange}
            />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="No"
              checked={this.state.selectedOption === "No"}
              onChange={this.onValueChange}
            />
            No
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form><form onSubmit={this.formSubmit}>
      <h3>Is there a visible trailhead?</h3>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Yes"
              checked={this.state.selectedOption === "Yes"}
              onChange={this.onValueChange}
            />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="No"
              checked={this.state.selectedOption === "No"}
              onChange={this.onValueChange}
            />
            No
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
      </>
    );
  }
}
export default Questions;
