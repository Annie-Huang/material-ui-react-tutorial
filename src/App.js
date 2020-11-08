import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from '@material-ui/core/Button';
import React from "react";
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Button href="#" variant="contained" color="secondary">*/}
        {/*<Button onClick={()=>alert('hello')} variant="contained" color="secondary">*/}
        {/*<Button size='large' disabled variant="contained" color="secondary">*/}
        {/*<Button size='large' style={{fontSize: 24}} variant="contained" color="secondary">*/}
        <Button startIcon={<SaveIcon />} endIcon={<SaveIcon />} size='large' variant="contained" color="secondary">
          Hello World
        </Button>
        <br/>
        <br/>
        <ButtonGroup>
          <Button startIcon={<SaveIcon />} size='large' variant="contained" color="primary">Save</Button>
          <Button startIcon={<DeleteIcon />} size='large' variant="contained" color="secondary">Discard</Button>
        </ButtonGroup>
        <br/>
        <ButtonGroup variant="contained" color="primary">
          <Button startIcon={<SaveIcon />} size='large'>Save</Button>
          <Button startIcon={<DeleteIcon />} size='large'>Discard</Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
