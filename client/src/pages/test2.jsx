import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";
import './seat.css'
import equal from 'fast-deep-equal';



export default class App2 extends Component {
    
    state = {
        bookedSeats : this.props.bookedSeats
    }
     
      
      componentDidMount() {
        this.updateUser();
      }
      
      componentDidUpdate(prevProps) {
        if(!equal(this.props.bookedSeats, prevProps.bookedSeats)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
          this.updateUser();
        }
      } 
      
      updateUser=() => {
        this.setState({bookedSeats: this.props.bookedSeats})
        // if (this.props.isManager) {
        //   this.props.dispatch(actions.fetchAllSites())
        // } else {
        //   const currentUserId = this.props.user.get('id')
        //   this.props.dispatch(actions.fetchUsersSites(currentUserId))
        // }  
      }
      
        
      
    

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.props.setSelected(`Added seat ${number}, row ${row}, id ${id}`);
    const newTooltip = `Selected Seat No: ${number}`;
    addCb(row, number, id, newTooltip);
  };

  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    if (removeCb) {
      removeCb(params.row, params.number);
    }
    this.props.setSelected(`Added seat ${number}, row ${row}, id ${id}`);  //just set id
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
    console.log(id)
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    removeCb(row, number, newTooltip);
  };

  isReserved=(seat)=>{
    // const bookedSeats = this.props.bookedSeats;
    //const reserved =  this.props.bookedSeats.includes(seat) ? true : false;
    const reserved =  this.state.bookedSeats.includes(seat) ? true : false;
    return reserved
    //return true
  }

  render() {
    const rows = [
      [
        { id: 1, number: 1, isReserved:this.isReserved(1) },
        { id: 2, number: 2, isReserved:this.isReserved(2) },
        null,
        {id: 3, number: 3, isReserved:this.isReserved(3) },
        { id: 4, number: 4, orientation: "west", isReserved: this.isReserved(4)},
        null,
      ],
      [
        {
          id: 5, number: 5,isReserved:this.isReserved(5) },
        { id: 6, number: 6,  isReserved:this.isReserved(6) },
        null,
        { id: 7, number: 7, orientation: "east" , isReserved:this.isReserved(7) },
        { id: 8, number: 8, orientation: "west" , isReserved:this.isReserved(8) },
      ],
      [
        { id: 9, number: 9 , isReserved:this.isReserved(9) },
        { id: 10, number: 10 , isReserved:this.isReserved(10) },
        null,
        { id: 11, number: 11, orientation: "east" , isReserved:this.isReserved(11) },
        { id: 12, number: 12, orientation: "west" , isReserved:this.isReserved(12) },
        null,
      ],
      [
        { id: 13, number: 13, isReserved:this.isReserved(13) },
        { id: 14, number: 14 , isReserved:this.isReserved(14) },
        null,
        { id: 15, number: 15, orientation: "east" , isReserved:this.isReserved(15) },
        { id: 16, number: 16, orientation: "west" , isReserved:this.isReserved(16) },
        null,
      ],
      [
        { id: 17, number: 17,  isReserved:this.isReserved(17) },
        { id: 18, number: 18, orientation: "east" , isReserved:this.isReserved(18) },
        null,
        { id: 19, number: 19,  isReserved:this.isReserved(19) },
        { id: 20, number: 20, orientation: "west" , isReserved:this.isReserved(20) },
        null,
      ],
      [
        { id: 21, number: 21,  isReserved:this.isReserved(21) },
        { id: 22, number: 22, orientation: "east" , isReserved:this.isReserved(22) },
        null,
        { id: 23, number: 23,  isReserved:this.isReserved(23) },
        { id: 24, number: 24, orientation: "west" , isReserved:this.isReserved(24) },
        null,
      ],
      [
        { id: 25, number: 25,  isReserved:this.isReserved(25) },
        { id: 26, number: 26, orientation: "east" , isReserved:this.isReserved(26) },
        null,
        { id: 27, number: 27,  isReserved:this.isReserved(27) },
        { id: 28, number: 28, orientation: "west" , isReserved:this.isReserved(28) },
        null,
      ],
    ];
    return (
      <div>  
    <div style={{ marginTop: "30px",  }}></div> 
        {/* backgroundImage: `url(https://i.imgur.com/jzOPBlm.jpg)`   */}
        <h1>Seat Picker Continuous Case</h1>
        <div style={{ marginTop: "10px",width:'500px', padding:'20px'}} >
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={rows}
            maxReservableSeats={1}
            alpha
            visible
            selectedByDefault
            loading={false}
            tooltipProps={{ multiline: true }}
            continuous
          />


        </div>
      </div>
    );
  }
}