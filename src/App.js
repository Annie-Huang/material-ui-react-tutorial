import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Button href="#" variant="contained" color="secondary">*/}
        {/*<Button onClick={()=>alert('hello')} variant="contained" color="secondary">*/}
        {/*<Button size='large' disabled variant="contained" color="secondary">*/}
        <Button size='large' style={{fontSize: 24}} variant="contained" color="secondary">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
