import NavBar from './Components/NavBar.js';
import { Redirect, Route, Switch, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from './Components/Signup';

function App()  {
  
    return (
      <div className="App">
        <Router>
            <NavBar>
              <Switch>
                <Route exact path="/signup" component={<Signup/>}> 
                </Route>
              </Switch>
            </NavBar>
        </Router>
        <Signup/>
      </div>
    );
}

export default App;
