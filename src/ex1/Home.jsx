import React, { Component } from 'react'
import "./Home.css"
import Seat from "./Seat"
import { connect } from "react-redux";

export class Home extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <section className="content" >
          <div className="form-content">
            <div className="left"><h1>Đặt vé xem phim</h1>
              <p>Màn hình</p>
              <Seat />

            </div>
            <div className="right">

              <h2>Danh sách vé bạn chọn</h2>

            </div>
          </div>

        </section>

      </div>
    )
  }

  //  fetchQuestions = async () => {
  //     try {
  //         const res =

  //     ;

  //         const action = {
  //             type: "UPDATE_Seat_LIST",
  //             payload: res.data,

  //         };

  //         this.props.dispatch(action);
  //     } catch (err) { }
  // };
}



export default connect()(Home)