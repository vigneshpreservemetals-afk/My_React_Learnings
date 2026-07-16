

import React, { useState } from "react";

export default function LoginLogoutProps(props) {

    const [message, setMessage] = useState();

    const login = () => {
        setMessage("Hello,Welcome to React World"+ " " + props.name)
    }

    const logut = () => {
        setMessage("Thank You, Bye" + " " + props.name)
    }

    const buttonStyle = {
        marginTop  :"20px",
        width      :"120px",
        height     :"32px"
    }

    const pageStyle  = {
        alignItems     : "center",
        justifyContent : "center",
        display        : "flex",
        flexDirection  : "column"
    }


    return (

        <div style={pageStyle}>

            <h3> {message} </h3>

            <button onClick={login} style ={buttonStyle}> Login </button>

            <button onClick={logut} style={buttonStyle}> Logout</button>
        </div>
    )

}