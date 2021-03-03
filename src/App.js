
  import { Route, Switch } from 'react-router-dom';
 import './App.scss';
  import Character from './components/Character';
  import CharacterList from './components/CharacterList';
  import Home from './components/Home';
  import Navbar from './components/Navbar';
import Spiner from './components/Spiner';
  import Weather from './components/Weather';

function App() {

  return (

    <div className="App">
<Navbar/>

  <Switch>
  <Route exact path="/"  render={(props)=><Home {...props}/>}/>
  <Route path="/weather" render= {(props)=> <Weather {...props}/> }/>
  <Route path="/characterList/:height" render= {(props)=> <Character {...props}/> }/>
  <Route path="/characterList" render= {(props)=> <CharacterList {...props}/> }/>
</Switch>
    </div>
  );
}

export default App;