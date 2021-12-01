import React, { Component } from "react";
import './App.css';
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            person:"https://th.bing.com/th/id/R.ee655151f81fd53ede49a196ef7fde1e?rik=XfymTN8%2bjGg1Hg&riu=http%3a%2f%2fwww.brandhall.sandwell.sch.uk%2fwp-content%2fuploads%2f2018%2f09%2fIMG_0026.jpg&ehk=5yBokkbhjCXMG2sUOEHeszHyowmifbhZ5aT%2bDoKOMRc%3d&risl=&pid=ImgRaw&r=0",
            counter: 0
        }
    }

    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrese=()=>{
      if (this.state.counter >0){ 
      this.setState({
        counter: this.state.counter - 1
        });
    }
    }

    muftah = () => {
        this.setState({
            counter: 0
        })

    }
  




    render() {
        return (
            <div className="vv">
             <img src={this.state.person} alt='test'/>
                <button onClick={this.increse}  >+</button>
                <button onClick={this.decrese}>-</button>
                <p> {this.state.counter} </p>
                <button onClick={this.muftah}>reset</button>



            </div>

        )
    }
}



   

