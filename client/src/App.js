import React, {Component} from 'react';
import axios from 'axios';
import Candidate from './Candidate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {
        chocolate: 0,
        vanilla: 0,
        matcha: 0,
        earlgrey: 0,
        durian: 0,
      }
    }
    this.addLike = this.addLike.bind(this);
  }
  
  addLike(flavor) {

  };

  render() {
    // if not initalized, do nothing
    if (!this.state.votes) return null;

    const flavorLikes = Object.entries(this.state.votes);
    const icecreamToBeRendered = flavorLikes.map((flavorLikes, index) => (
      <Candidate flavor={flavorLikes[0]} likes={flavorLikes[1]} key={index} clickEvent={this.addLike}/>
    ));

    return (
      <div>
        <h1>Which icecream is da best</h1>
        <br/><br />
        <div className="main">
          {icecreamToBeRendered}
        </div>
      </div>
    )
  }
}