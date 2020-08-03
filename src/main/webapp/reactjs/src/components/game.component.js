import React, { Component } from "react";
import DiceRack from "./jamb/dice-rack.component";
import Form from "./jamb/form.component";
import "../test.css"

// import { toggleDiceHold, rollDice, boxClick, showRules, showLeaderboard } from "./jamb-fake.component";
// import JambFake from "./jamb-fake.component";

// function toggleDiceHold() {} 
// function rollDice() {
//     console.log("Jamb - rollDice")
// }
// function boxClick() {} 
// function showRules() {} 
// function showLeaderboard() {}


export default class Game extends Component {
    render() {
        return (
            <div class="test">
                <DiceRack />
                <Form />
            </div>
        )
    }

    //             <title>Jamb</title>
    //             <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
    //             <meta name="viewport" content="height=device-height, initial-scale=1, minimum-scale=1" />
    //             <link rel="icon" src="favicon.png" />
    //             <div className="game">
    //                 <div className="dice-rack">
    //                     <button className="button-dice" id="dice1" onClick={toggleDiceHold(this.id)} />
    //                     <button className="button-dice" id="dice2" onClick={toggleDiceHold(this.id)} />
    //                     <button className="button-dice" id="dice3" onClick={toggleDiceHold(this.id)} />
    //                     <button className="button-dice" id="dice4" onClick={toggleDiceHold(this.id)} />
    //                     <button className="button-dice" id="dice5" onClick={toggleDiceHold(this.id)} />
    //                 </div>
    //                 <div className="button-container">
    //                     <button className="button-roll-dice" id="roll-dice" onClick={rollDice}>BACI KOCKICE</button>
    //                 </div>
    //                 <div className="form">
    //                     <div className="empty-item" />
    //                     <img className="label-image" src="../images/field/downwards.bmp" alt="jamb" />
    //                     <img className="label-image" src="../images/field/upwards.bmp" alt="jamb" />
    //                     <img className="label-image" src="../images/field/any_direction.bmp" alt="jamb" />
    //                     <div className="label">NAJAVA</div>
    //                     <div className="empty-item" />
    //                     <img className="label-image" src="../images/dice/1.bmp" alt="jamb" />
    //                     <button className="box" id={0} onClick={boxClick(this.id)} />
    //                     <button className="box" id={13} onClick={boxClick(this.id)} />
    //                     <button className="box" id={26} onClick={boxClick(this.id)} />
    //                     <button className="box" id={39} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <img className="label-image" src="../images/dice/2.bmp" alt="jamb" />
    //                     <button className="box" id={1} onClick={boxClick(this.id)} />
    //                     <button className="box" id={14} onClick={boxClick(this.id)} />
    //                     <button className="box" id={27} onClick={boxClick(this.id)} />
    //                     <button className="box" id={40} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <img className="label-image" src="../images/dice/3.bmp" alt="jamb" />
    //                     <button className="box" id={2} onClick={boxClick(this.id)} />
    //                     <button className="box" id={15} onClick={boxClick(this.id)} />
    //                     <button className="box" id={28} onClick={boxClick(this.id)} />
    //                     <button className="box" id={41} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <img className="label-image" src="../images/dice/4.bmp" alt="jamb" />
    //                     <button className="box" id={3} onClick={boxClick(this.id)} />
    //                     <button className="box" id={16} onClick={boxClick(this.id)} />
    //                     <button className="box" id={29} onClick={boxClick(this.id)} />
    //                     <button className="box" id={42} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <img className="label-image" src="../images/dice/5.bmp" alt="jamb" />
    //                     <button className="box" id={4} onClick={boxClick(this.id)} />
    //                     <button className="box" id={17} onClick={boxClick(this.id)} />
    //                     <button className="box" id={30} onClick={boxClick(this.id)} />
    //                     <button className="box" id={43} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <img className="label-image" src="../images/dice/6.bmp" alt="jamb" />
    //                     <button className="box" id={5} onClick={boxClick(this.id)} />
    //                     <button className="box" id={18} onClick={boxClick(this.id)} />
    //                     <button className="box" id={31} onClick={boxClick(this.id)} />
    //                     <button className="box" id={44} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label-sum">SUM</div>
    //                     <div className="label-number" id="DOWNWARDS-numberSum" />
    //                     <div className="label-number" id="UPWARDS-numberSum" />
    //                     <div className="label-number" id="ANY_DIRECTION-numberSum" />
    //                     <div className="label-number" id="ANNOUNCEMENT-numberSum" />
    //                     <div className="label-number" id="numberSum" />
    //                     <div className="label">MAX</div>
    //                     <button className="box" id={6} onClick={boxClick(this.id)} />
    //                     <button className="box" id={19} onClick={boxClick(this.id)} />
    //                     <button className="box" id={32} onClick={boxClick(this.id)} />
    //                     <button className="box" id={45} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label">MIN</div>
    //                     <button className="box" id={7} onClick={boxClick(this.id)} />
    //                     <button className="box" id={20} onClick={boxClick(this.id)} />
    //                     <button className="box" id={33} onClick={boxClick(this.id)} />
    //                     <button className="box" id={46} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label-sum">SUM</div>
    //                     <div className="label-number" id="DOWNWARDS-diffSum" />
    //                     <div className="label-number" id="UPWARDS-diffSum" />
    //                     <div className="label-number" id="ANY_DIRECTION-diffSum" />
    //                     <div className="label-number" id="ANNOUNCEMENT-diffSum" />
    //                     <div className="label-number" id="diffSum" />
    //                     <div className="label">TRIS</div>
    //                     <button className="box" id={8} onClick={boxClick(this.id)} />
    //                     <button className="box" id={21} onClick={boxClick(this.id)} />
    //                     <button className="box" id={34} onClick={boxClick(this.id)} />
    //                     <button className="box" id={47} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label">SKALA</div>
    //                     <button className="box" id={9} onClick={boxClick(this.id)} />
    //                     <button className="box" id={22} onClick={boxClick(this.id)} />
    //                     <button className="box" id={35} onClick={boxClick(this.id)} />
    //                     <button className="box" id={48} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label">FULL</div>
    //                     <button className="box" id={10} onClick={boxClick(this.id)} />
    //                     <button className="box" id={23} onClick={boxClick(this.id)} />
    //                     <button className="box" id={36} onClick={boxClick(this.id)} />
    //                     <button className="box" id={49} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label">POKER</div>
    //                     <button className="box" id={11} onClick={boxClick(this.id)} />
    //                     <button className="box" id={24} onClick={boxClick(this.id)} />
    //                     <button className="box" id={37} onClick={boxClick(this.id)} />
    //                     <button className="box" id={50} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label">JAMB</div>
    //                     <button className="box" id={12} onClick={boxClick(this.id)} />
    //                     <button className="box" id={25} onClick={boxClick(this.id)} />
    //                     <button className="box" id={38} onClick={boxClick(this.id)} />
    //                     <button className="box" id={51} onClick={boxClick(this.id)} />
    //                     <div className="empty-item" />
    //                     <div className="label-sum">SUM</div>
    //                     <div className="label-number" id="DOWNWARDS-labelSum" />
    //                     <div className="label-number" id="UPWARDS-labelSum" />
    //                     <div className="label-number" id="ANY_DIRECTION-labelSum" />
    //                     <div className="label-number" id="ANNOUNCEMENT-labelSum" />
    //                     <div className="label-number" id="labelSum" />
    //                     <button className="button-rules" onClick={showRules}>Pravila</button>
    //                     <button className="button-leaderboard" onClick={showLeaderboard}>TOP</button>
    //                     <div className="label-sum-final" id="finalSum" />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
}
