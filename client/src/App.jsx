import React, { Component } from 'react';
import Candidate from './Candidate.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      votes: {
        chocolate: 2,
        vanilla: 0,
        durian: 9
      }  

    }
  }
  addVote (id) {

  // TO DO
  // change state and make post request
    console.log(id)

  }


  render() {
    // instantiate candidates (list of all ice cream)
    const typesOfIcecream = Object.entries(this.state.votes);

    const icecreamToBeRendered = typesOfIcecream.map((icecream, index) => (
      <Candidate info={icecream}  key={index} clickEvent={this.addVote}/>
  ))

    return (
    <div><h1>Which Icecream is Supreme?</h1>
      <br /><br /><br />
      <div className="main">

      {icecreamToBeRendered}

      </div>
      
    </div>
    )
  }
}

export default App;
