import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Contactus from './components/Contact.jsx';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component = {App} />
        <Route path="todo" component={App}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contactus}/>
      </Route>
  </Router>
), document.getElementById('app'))