import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

//import login  from './login.jsx';
import Loadable from 'react-loadable';

import Logout  from './Logout.jsx';
import EditDrawer  from './editDrawer';

import { connect }          from 'react-redux';





const home = () =>{
        return <div> jj jbj jsbdjsbdjsdbsj d</div>
}
const test = () =>{
        return <EditDrawer />
}


function Loading({ error }) {
  if (error) {
    return 'Oh nooess!';
  } else {
    return <h3>Loading...</h3>;
  }
}

const login = Loadable({
  loader: () => import('./login.jsx'),
  loading: Loading
});

class App extends React.Component {
    
   constructor () {
       super();
       console.log(this.state)
   }
   
   render() {
      return (
        <Router history={browserHistory}>
            <div>
                <div>
                <ul>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/logout'}>Logout</Link></li>
                    <li><Link to={'/test'}>Test</Link></li>
                </ul>
                </div>
                <div style={{'marginLeft':100 +'px'}}>
                <Switch>
                    <Route  exact path="/" component={home} />
                    <Route  path='/login' component={login} />
                    <Route  path='/logout' component={Logout} />
                    <Route  path='/test' component={test} />
                </Switch>
                
                </div>
            </div>
        </Router>

      );
   }
}
const bindActionsToDispatch = dispatch =>
(
  {
    addTodo : () => {dispatch(addTodo())}
  }
);

const mapStateToProps = state => {
    const {text} = state;

    return {
        todos : text
    }

};

const mapDispatchToProps = dispatch => ({

    saveData(data) {
        alert("1")
    }

});




export default connect(mapStateToProps, mapDispatchToProps)(App);
