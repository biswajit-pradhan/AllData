import { Component } from "react";
import "./home.css"

export default class Home extends Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    render(){
        return (
            <div className="background">
                <nav className="navbar navbar-expand-lg navbar-dark navbar-survival101">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="https://lh3.googleusercontent.com/-ZAS0BBE8Sm0/WaFOdATxW9I/AAAAAAAAAf4/8FfuKoWw6n0cvynAv7Fv2sdYESliQEm4wCL0BGAYYCw/h18/2017-08-26.png" alt="L A N T E R N"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Fundamentals<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Trending</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">More <i className="ion-ios-arrow-down"></i></a>
                                </li>
                            </ul>
                            <form className="form-inline">
                                <div className="input-group search-box">
                                    <input type="text" className="form-control" placeholder="What are you looking for?" aria-label="Search for..."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-secondary" type="button"><i className="ion-search"></i></button>
                                        </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}