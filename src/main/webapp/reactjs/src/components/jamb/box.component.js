import React, { Component } from "react";
import "./box.css"

export default class Box extends Component {
      render() {
        const column = this.props.column;
        const box = this.props.box;
          return (
            <button className="box" onClick={this.boxClick.bind(this)} />
          )
      }

      boxClick() {
        console.log(this.props.column + " " + this.props.box);
      }
  }
  