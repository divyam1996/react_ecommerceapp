import React, { useState } from 'react';


const Form = ()=>{
    const [state,setstate] =useState({username:"",password:null, email:""})

    const updateFields =(event)=>{
          setstate({...state, [event.target.name]:event.target.value})
    }

    const handleForm = (event)=>{
        event.preventDefault();//prevent page reload
        console.log(state);
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="offset-4 col-md-4">
                        <h4>Create an Account</h4>
                        <form>
                            <div className="form-group">
                                    <label>Username:</label>
                                    <input type="text" name="username" className="form-control" onChange={updateFields}/>
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



        </React.Fragment>
    )
}


export default Form;