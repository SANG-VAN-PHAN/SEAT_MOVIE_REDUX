import React, { Component } from 'react'

export class Seatt extends Component {

    render() {
        const {
            prod: { danhSachGhe },

        } = this.props;
        return (
            <div>



                {danhSachGhe.map((item) => (

                   <input key={item.soGhe}></input>

                ))}
            </div>
        )
    }
}

export default Seatt