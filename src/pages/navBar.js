import React, {Component} from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <a className="navbar-brand" href="#">Redux Social</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    </ul>
                </div>
                </div>
               </nav>
               
            </div>
        )
    }
}

export default NavBar;