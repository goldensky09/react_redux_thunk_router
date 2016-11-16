#React_redux_think_router

##Pre requisite
* Refer [react_todolist](https://github.com/mkum83/react_todolist) contains same application built with React only.
* Refer [react_redux-todolist](https://github.com/mkum83/react_redux-todolist), same application built with React + Redux.
* Refer [react_redux_thunk-todolist](https://github.com/mkum83/react_redux_thunk-todolist), same application built with React + Redux + Thunk.

##What is react_router
React Router is the standard routing library for React Router. From the docs:
>React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.
Refer [reacy-router]https://github.com/ReactTraining/react-router

##Install react-router
```sh
npm install react-router --save
```
###Import below in main.js
```sh
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
```

##Lets draw out site structure 
* Welcome/Home page{Main}
* To do List{App}
* About{About}
* Contact Us{Contactus}

###Implement the site structure in render() using router in main.js
```sh
//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component = {Home} />
        <Route path="todo" component={App}/>
        <Route path="about" component={About}/>
        <Route path="contactus" component={Contactus}/>
      </Route>
  </Router>
), document.getElementById('app'))
```

##Lets add components/Main.jsx file, which will act as template for our application
```sh
class Main extends React.Component {
   render() {
      return (
         <div>
           <nav className="navbar navbar-default"> ...</nav>
            <div className='container'>{this.props.children}</div>
           <footer className="container-fluid">... </footer>
         </div>
      )
   }
}
```
`{this.props.children}` will act as placeholder to load the child pages.

_Important_: Using Link for navigation (components/Main.jsx)
```sh
    <li><Link to="todo">Home</Link></li>
    <li><Link to="about">About</Link></li>
    <li><Link to="contact">Contact Us</Link></li>
```
##Also add components/About.jsx, components/Contact.jsx and import in main.js
```sh
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Contactus from './components/Contact.jsx';
```
run `localhost:8080/` and try to navigate using menu items. 
![Screen shot](https://github.com/mkum83/react_redux_thunk_router/blob/master/screenshot.PNG "Screen Shot")


####ISSUE
Direct accessing to any page like "localhost:8080/contact" will result in error.

**Reason**: as the direct access to pages requesting the page directly from server, hence resulting in error.

**Solution**: Server side routing also required so that server serve always home page while receiving any URL request. 

###Update in App.jsx
code is moved from `componentWillMount()` to `componentDidMount()` and `_mounted` custom flag used to avoid setting state if component is not mounted.
```sh
componentDidMount(){
    this._mounted = true;
    ...
```
 
