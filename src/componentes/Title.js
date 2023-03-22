import axios from 'axios';
import React, { useState, useEffect } from 'react';
import logo from "../img/zippia.png"


export default function Jobs() {
    return(
        <div style={{backgroundColor:"#2C2C2C", marginBottom:"1vh", padding:"1vh"}}>
            <img src={logo} alt="Logo" style={{height:"5vh"}}/>
        </div>
    )
}