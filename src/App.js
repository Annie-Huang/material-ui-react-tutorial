import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from '@material-ui/core/Button';
import React from "react";
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from "@material-ui/core/Checkbox";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      {/*<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} color="primary" disabled/>*/}
      <Checkbox
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />

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
        <br/>
        <br/>

        {/*<Button href="#" variant="contained" color="secondary">*/}
        {/*<Button onClick={()=>alert('hello')} variant="contained" color="secondary">*/}
        {/*<Button size='large' disabled variant="contained" color="secondary">*/}
        {/*<Button size='large' style={{fontSize: 24}} variant="contained" color="secondary">*/}
        <Button startIcon={<SaveIcon />} endIcon={<SaveIcon />} size='large' variant="contained" color="secondary">
          Hello World
        </Button>
        <br/>
        <br/>

      </header>
    </div>
  );
}

export default App;
