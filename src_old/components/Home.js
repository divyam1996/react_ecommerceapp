import React from "react";
import './css/Home.css'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={myproduct:"dummy",isdisplay:false}
    }

    displayCount =()=>{
      this.setState({isdisplay:!this.state.isdisplay})
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log("updated state",nextState);
      return true;
    }
    
  render() {
    let count;
    if(this.state.isdisplay){
      count =  (<>
      <h3>The total Number of products is {this.props.prods.length}</h3>
        <h3>The total Number of products is {this.props.prods.length}</h3>
        </>)
    }else{
      count =null;
    }
  
    console.log('rendering');
    return (
      <React.Fragment>
        <div className="container">
          <button className="btn btn-warning ms-3" onClick={this.displayCount}>Show count</button>
               {this.state.isdisplay? <h3>The total Number of products is {this.props.prods.length}</h3>:null}
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
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
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

export default Home;
