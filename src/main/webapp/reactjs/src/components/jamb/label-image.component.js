import React, { Component } from "react";
import DiceButton from "./dice-button.component";
import RollDiceButton from "./roll-dice-button.component";
import "./label.css"

export default class LabelImage extends Component {
      render(){
        const imgUrl = this.props.imgUrl;
          return (
               <img class="label-image" src={imgUrl} alt="jamb" />
          )
      }
  }
  