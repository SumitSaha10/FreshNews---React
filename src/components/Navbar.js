import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export class Navbar extends Component {

    render() {
     
        return (
            
          <nav className="navigation">
          <div className="logo-bars">
          <Link to="/">
            <h2>
              FreshNews
            </h2>
          </Link>

              <ul>
                  <li className="lists"><Link to="/" className="href">Home</Link></li>
                  <li className="lists"><Link to="/sports" className="href">Sports</Link></li>
                  <li className="lists"><Link to="/entertainment" className="href">Entertainment</Link></li>
                  <li className="lists"><Link to="/science" className="href">Science</Link></li>
                  <li className="lists"><Link to="/technology" className="href">Technology</Link></li>
                  <li className="lists"><Link to="/business" className="href">Business</Link></li>
                  <li className="lists"><Link to="/health" className="href">Health</Link></li>
                 
              </ul>
        
         </div>   
           
      </nav>
            
        )
    }
}

export default Navbar
