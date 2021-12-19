import react from "react";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Form from "./components/Forms";
import axios from 'axios';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

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
      userInput: null,
      childInput: null
    };

    setTimeout(() => {
      console.log(this.state);
      this.setState({ title: "Angular" });
      console.log(this.state);
    }, 4000);
  }

  changeTitle = () => {
    this.setState({ name: "OnePlus" });
    console.log("triggered");
  };

  storeInput = (event) => {
    console.log(event.target.value);
    this.setState({ userInput: event.target.value })
  }

  updateChild =(val)=>{
    this.setState({childInput:val})
      console.log('it is triggered by home.js');
  }

  manipulateCard = (event) => {
    if (event.key == 'Enter') {
      console.log('u pressed enter key');
      let initialarray = this.state.products
      let temp = this.state.products.filter((a) => {
        return a.name.toLowerCase() == this.state.userInput.toLowerCase();
      })

      if (temp) {
        this.setState({ products: temp })
      } else {
        this.setState({ products: initialarray })
      }
    }

  }
  componentDidMount() {
    let response = axios.get('https://jsonplaceholder.typicode.com/users');
    response.then((res) => {
      console.log(res);
      this.setState({ products: res.data })
    }).catch((err) => {
      console.log(err);
    })
    // console.log(response);
    console.log('app.js | it is ready');
  }
  render() {
    console.log('app.js | rendering');
    return (
      <react.Fragment>
        <BrowserRouter>
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
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form/23">Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart"> Cart</Link>
            </li>

          </ul>
          <h2>Selected name:  {this.state.childInput}</h2>
          <div>
            <label>search...</label>
            <input type="text" onChange={this.storeInput} onKeyDown={this.manipulateCard} />
          </div>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home" component={() => <Home prods={this.state.products} homeevent={this.updateChild}></Home>}></Route>
          <Route path="/form/:user" component={Form}></Route>
          <Route path="/cart" component={Cart}></Route>

        </BrowserRouter>
      </react.Fragment>
    );
  }
}

export default App;
