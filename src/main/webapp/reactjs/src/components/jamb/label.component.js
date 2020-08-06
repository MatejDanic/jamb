import React, { PureComponent } from "react";
import "./label.css"

export default class Label extends PureComponent {

    componentDidUpdate() {
        // console.log(this.props.variables);
    }
      render() {
          return (
               <div className={this.props.labelClass} style={{ backgroundImage: 'url('+this.props.imgUrl+')' }}>
                   {this.props.value}
               </div>
          )
      }
  }
  