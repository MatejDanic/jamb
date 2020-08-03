import React, { Component } from "react";
import DiceButton from "./dice-button.component";
import RollDiceButton from "./roll-dice-button.component";
import "./dice-rack.css"

export default class LabelNumber extends Component {
      render(){
          return (
               <div class="dice-rack">
                   <DiceButton />                   
                   <DiceButton />                   
                   <DiceButton />                   
                   <DiceButton />                  
                   <DiceButton />
                   <div><RollDiceButton/></div>
               </div>
          )
      }
  }
  