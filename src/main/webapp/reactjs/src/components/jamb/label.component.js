import React, { Component } from "react";
import "./label.css"

export default class Label extends Component {
      render(){
          return (
               <div class="label">
                {this.props.label}
               </div>
          )
      }
  }
  