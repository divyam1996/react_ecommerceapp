import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
    const [state, setstate] = useState({productName:"", productCount:0})

   const updateCount = ()=>{
     setstate({...state,productCount:4})
      
   }

    return (
        <React.Fragment>
            <div className="container mt-4">
                <h2
                    className="bg-primary text-white text-center"
                    style={{ borderRadius: "10px" }}
                >
                    My Carts <span className="badge bg-danger text-white">{state.productCount}</span>
                </h2>

                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">
                        This is a simple hero unit, a simple jumbotron-style component for
                        calling extra attention to featured content or information.
                    </p>
                    <hr className="my-4"></hr>
                    <p>
                        It uses utility classes for typography and spacing to space content
                        out within the larger container.
                    </p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" onClick={updateCount} role="button" >
                           update count
                        </a>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Cart;
