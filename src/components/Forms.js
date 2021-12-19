import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


const Form = (props)=>{
    const [state,setstate] =useState({username:"",password:null, email:""});

    const userRef = React.createRef();

    const updateFields =(event)=>{
          setstate({...state, [event.target.name]:event.target.value})
    }

    const handleForm = (event)=>{
        console.log(userRef.current.value);
        if(state.username=="" || state.password==null || state.email == ""){

            alert("all fields are required")
        }else{
            //home
            props.history.replace('/home');
        }
        event.preventDefault();//prevent page reload
        console.log(state);
    }
    useEffect(()=>{
        console.log('form.js | functional component is loaded');
    },[state.username])
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="offset-4 col-md-4">
                        <h4>Create an Account</h4>
                        <form>
                            <div className="form-group">
                                    <label>Username:</label>
                                    <input type="text" ref={userRef} name="username" className="form-control" onChange={updateFields}/>
                            </div>
                            <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" name="password" className="form-control" onChange={updateFields}/>
                            </div>
                            <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" name="email" className="form-control" onChange={updateFields}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleForm}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
<br></br>

<h1>count: {props.mycount}</h1>
<h2>params: {props.match.params.user}</h2>

        </React.Fragment>
    )
}

const subscriber =(state)=>{
    return {
        mycount:state.count
    }
}

const connectedcomp = connect(subscriber)
export default connectedcomp(Form);