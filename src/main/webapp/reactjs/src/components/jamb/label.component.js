import React, { Component } from "react";
import "./label.css"

export default class Label extends Component {
      render() {
          return (
               <div className={this.props.labelClass} style={{ backgroundImage: 'url('+this.props.imgUrl+')' }}>
                   {this.props.name}
               </div>
          )
      }
  }
  