import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";
import './seat.css'
import equal from 'fast-deep-equal';



export default class App2 extends Component {
    
    state = {
        bookedSeats : this.props.bookedSeats,
        refresh: 'random'
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
    this.props.setSelected(`${id}`);
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
    this.props.setSelected(`${id}`);  //just set id
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
    console.log(id)
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    const newTooltip = ["", "", ""].includes(row) ? null : "";
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
    const bus = [
        [
            { id: 1000, number: "Refresh" },
        ],
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
      [
        { id: 29, number: 29,  isReserved:this.isReserved(29) },
        { id: 30, number: 30, orientation: "east" , isReserved:this.isReserved(30) },
        null,
        { id: 31, number: 31,  isReserved:this.isReserved(31) },
        { id: 32, number: 32, orientation: "west" , isReserved:this.isReserved(32) },
        null,
      ],
      
    ];

    const mini_bus = [
        [
            { id: 1000, number: "Refresh" },
        ],
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
    ];

    const cinema = [
      [
          { id: 1000, number: "Refresh" },
      ],
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
    [
      { id: 29, number: 29,  isReserved:this.isReserved(29) },
      { id: 30, number: 30, orientation: "east" , isReserved:this.isReserved(30) },
      null,
      { id: 31, number: 31,  isReserved:this.isReserved(31) },
      { id: 32, number: 32, orientation: "west" , isReserved:this.isReserved(32) },
      null,
    ],
    [
      { id: 33, number: 33,  isReserved:this.isReserved(33) },
      { id: 34, number: 34, orientation: "east" , isReserved:this.isReserved(34) },
      null,
      { id: 35, number: 35,  isReserved:this.isReserved(27) },
      { id: 36, number: 36, orientation: "west" , isReserved:this.isReserved(36) },
      null,
    ],
    [
      { id: 37, number: 37,  isReserved:this.isReserved(37) },
      { id: 38, number: 38, orientation: "east" , isReserved:this.isReserved(38) },
      null,
      { id: 39, number: 39,  isReserved:this.isReserved(39) },
      { id: 40, number: 40, orientation: "west" , isReserved:this.isReserved(40) },
      null,
    ],
    [
      { id: 41, number: 41,  isReserved:this.isReserved(41) },
      { id: 42, number: 42,  isReserved:this.isReserved(42) },
      null,
      { id: 43, number: 43, orientation: "east" , isReserved:this.isReserved(43) },
      { id: 44, number: 44,  isReserved:this.isReserved(44) },
      null,
    ],[
      { id: 45, number: 45,  isReserved:this.isReserved(45) },
      { id: 46, number: 46, orientation: "east" , isReserved:this.isReserved(46) },
      null,
      { id: 47, number: 47,  isReserved:this.isReserved(47) },
      { id: 48, number: 40, orientation: "west" , isReserved:this.isReserved(40) },
      null,
    ],[
      { id: 49, number: 49,  isReserved:this.isReserved(49) },
      { id: 50, number: 50, orientation: "east" , isReserved:this.isReserved(50) },
      null,
      { id: 51, number: 51,  isReserved:this.isReserved(51) },
      { id: 52, number: 52, orientation: "west" , isReserved:this.isReserved(52) },
      null,
    ],
    
  ];



    let seatingConfig = bus;  //default
    let imageURL = 'https://via.placeholder.com/600/f66b97'
    if(this.props.preset=='bus'){
      seatingConfig = bus;
      imageURL = 'https://i.imgur.com/kxz84Zq.jpg'
    }else if(this.props.preset=='micro_bus'){
      seatingConfig = mini_bus
      imageURL = 'https://i.imgur.com/QmXlhjn.jpg'
    }else if(this.props.preset=='cinema'){
      seatingConfig = cinema
      imageURL = 'https://i.imgur.com/wCsrC7h.jpg'
    }

    
    return (
      <div>  
    <div style={{ marginTop: "30px",  }}></div> 
        {/* backgroundImage: `url(https://i.imgur.com/jzOPBlm.jpg)`   */}
        <h2>Select Select from below</h2>
        <h4 className='text-secondary'>Hit Refresh button after selecting date.</h4>

        <div><span className="btn btn-info p-2 mx-2"></span><span> Available Seats </span></div>
        <div><span className="btn btn-light p-2 mx-2" style={{backgroundColor: '#bbb'}}></span><span>Reserved Seats</span></div>
        <div><span className="btn btn-success p-2 mx-2"></span><span> Your Selection </span></div>

        <div style={{ marginTop: "10px",width:'500px', padding:'20px', padding:'5px'}} >

        <div style= {{width:'100%', 
          backgroundImage: `url(${imageURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'105% 120%'
          }}>


          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={seatingConfig}
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
      </div>
    );
  }
}