import React,{PropTypes} from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
   render() {
      return (
         <div>
           <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">React Router</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="todo">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                   <li><Link to="contact">Contact Us</Link></li>
                </ul>
              </div>
            </nav>
            <div className='container'>{this.props.children}</div>
           <footer className="container-fluid">
               <hr></hr>
                  Footer Contant comes here                
           </footer>
         </div>
      )
   }
}
export default Main;