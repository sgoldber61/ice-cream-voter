import React, {Component} from 'react';

class Candidate extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.info,  "at candidates");



    // this.props.info[0]     =     ice cream type
    // this.props.info[1]     =     votes
  }
  
  render() {
    console.log(this.props.info)

    return (

      <div className="row">
        <div>
          {this.props.info[0]}
        </div>
        <div>
        {this.props.info[1]}
        </div>
        <div >
          <button onClick={() => this.props.clickEvent(this.props.info[0])}> ⬆ </button>

        </div>
      
      </div>


    )
  }
}

export default Candidate;
