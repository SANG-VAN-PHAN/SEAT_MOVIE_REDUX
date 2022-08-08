import React, { Component } from 'react'
import { connect } from "react-redux";
import Seatt from './Seatt';
export class Seat extends Component {
  render() {
   
   
    
      return (
        <div>

         

        {this.props.Hehe.map((item) => ( 
            
          <Seatt prod={item}/>
          
          ))}
        </div>
      )
    
  }
}
const mapStateToProps = (state) => {
  return {
    // propName: state
    Hehe: state.List.seatList,


  };
};
export default connect(mapStateToProps)(Seat)