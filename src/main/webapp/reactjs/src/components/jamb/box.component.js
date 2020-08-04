import React, { Component } from "react";
import "./box.css"

export default class Box extends Component {
      render() {
          return (
            <button className="box" onClick={this.boxClick.bind(this)} />
          )
      }

      boxClick() {
        console.log("clicked: (" + this.props.column + ", " + this.props.box + ")");
      }
  }
  