import React,{Component} from 'react';
import "./index.css";
import logo from "../images/logo_white.svg";

export default class Menu extends Component{
    render(){
        return(
            <div style={{backgroundColor:"#fff"}}>
                <header className="header">
                    <a href="/"><img className="logo" alt="Home" style={{color:"#000"}} src={logo}/></a>
                </header>
            </div>
        )
    }
}