import React,{Component} from "react";
import { NavLink } from "react-router-dom";

class Home extends Component{

    render(){
return(
    <div> 
        <h1>This A is home page</h1>
        <NavLink to="/about-us">About Page</NavLink>
        <br/>
        <NavLink to="/login">Login Page</NavLink>
        <br/>
        <NavLink to="/product">Products</NavLink>
        <br/>
        <NavLink to="/contact">Contact</NavLink>
        <br/>
        <NavLink to="/mail"> Go to mail page</NavLink>

    </div>
)
    }
}


    export default Home;