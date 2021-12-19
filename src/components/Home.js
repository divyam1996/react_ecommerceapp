import React, { useEffect } from "react";
import './css/Home.css'
import Cart from "./Cart";
import { connect } from "react-redux";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={myproduct:"dummy",isdisplay:false}
    }

    displayCount =()=>{
       this.props.incrementCount();
      this.setState({isdisplay:!this.state.isdisplay})
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log("updated state",nextState);
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('previous state', prevState);
      return null;
    }
    componentDidUpdate(){
      console.log('component is updated');
    }

    componentWillUnmount(){
      console.log('component is hidden');
    }
    
  render() {
    let count;
    if(this.state.isdisplay){
      count =  (<>
      <h3>The total Number of products is {this.props.prods.length}</h3>
        <Cart></Cart>
        </>)
    }else{
      count =null;
    }
  
    console.log('rendering');
    return (
      <React.Fragment>
        <div className="container">
          <button className="btn btn-warning ms-3" onClick={this.displayCount}>Show count</button>
             {count}
          <div className="row">
           {this.props.prods.map((a)=>{
             console.log('card');
             return (
               
              <div className="offset-1 col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{a.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {a.price}
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className="btn btn-primary" onClick={()=>{this.props.homeevent(a.name)}}>Add Name to app</button>
                </div>
              </div>
            </div>
             )
           })}
            
          </div>
        </div>
     

      </React.Fragment>
    );
  }
}


const messenger =(dispatch)=>{
  return{
    incrementCount:()=>{
      return dispatch({type:"INC"})
    },
    decrementCount:()=>{
       return dispatch({type:"DEC"})
    }
  }
}


// const a=function(){
//   console.log(b);
//   let b=0;
//   return function(){
//     b=b+1;
//   }
  
// }
// useEffect(()=>{

// },[])

const connectedComp = connect(null,messenger)

export default connectedComp(Home) ;
