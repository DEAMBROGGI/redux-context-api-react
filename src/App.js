import '../src/styles/App.css';

import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../src/componenet/Home'

function App() {
  return (
    <Router >
    <div className="body">
    
    <Switch>
        <Route path='/'>
            <Home/>
        </Route>
    </Switch>
    </div>
    </Router>  
  );
}

export default App;
