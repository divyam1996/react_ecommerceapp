import react from "react";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Form from "./components/Forms";

class App extends react.Component {
  constructor() {
    console.log('app.js | constructor');
    super(); //calling the constructor of parent
    this.state = {
      title: "React",
      products: [
        { name: "Samsung", desc: "this is trending one", price: 30000 },
        { name: "Apple", desc: "this is trending one", price: 20000 },
        { name: "Redmi", desc: "this is trending one", price: 43000 },
        { name: "Realme", desc: "this is trending one", price: 25000 },
        { name: "One plus", desc: "this is trending one", price: 50000 },
        { name: "Realme", desc: "this is trending one", price: 25000 },
        { name: "One plus", desc: "this is trending one", price: 50000 },
      ],
      userInput:null,
    };

    setTimeout(() => {
      console.log(this.state);
      this.setState({ title: "Angular" });
      console.log(this.state);
    }, 2000);
  }

  changeTitle = () => {
    this.setState({ name: "OnePlus" });
    console.log("triggered");
  };

  storeInput =(event)=>{
    console.log(event.target.value);
this.setState({userInput:event.target.value})
  }

  manipulateCard =(event)=>{
   if(event.key == 'Enter'){
    console.log('u pressed enter key');
    let initialarray = this.state.products
  let temp = this.state.products.filter((a)=>{
      return a.name.toLowerCase() == this.state.userInput.toLowerCase();
    })

    if(temp){
      this.setState({products:temp})
    }else{
      this.setState({products:initialarray})
    }
   }

  }
componentDidMount(){
  console.log('app.js | it is ready');
}
  render() {
    console.log('app.js | rendering');
    return (
      <react.Fragment>
        <h1
          className="heading"
          style={{ color: "white", backgroundColor: "grey", fontSize: "40px" }}
        >
          Welcome to {this.state.title}
          <span
            style={{ fontSize: "12px", marginLeft: "5px" }}
            className="badge bg-primary text-white"
          >
            RA
          </span>
        </h1>
        <button className="btn btn-primary" onClick={this.changeTitle}>
          change name
        </button>
        <div>
          <label>search...</label>
          <input type="text" onChange={this.storeInput} onKeyDown={this.manipulateCard}/>
        </div>
        <Home prods={this.state.products}></Home>
        <Cart></Cart>
        <Form></Form>
      </react.Fragment>
    );
  }
}

export default App;
