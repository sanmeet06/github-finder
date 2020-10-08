import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"


 const Navbar =(props)=> {
        return (
            <>
            <nav className="navbar bg-primary" style={{backgroundColor:"rgb(71 65 65)"}}>
                <h1>{props.title}</h1>
                <ul>
                <li>
                <Link to='/'>Home</Link>
                    </li>
                    <li>
                <Link to='/about'>About</Link>
                    </li>
            </ul>
            </nav>
           
            </>
        )
    
}
Navbar.defaultProps={
    title:"Github finder",
}
Navbar. propTypes={
    title:PropTypes.string.isRequired,
}

export default Navbar
