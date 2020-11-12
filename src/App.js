import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from '@material-ui/core/Button';
import React from "react";
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange} from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
  },
});

const theme= createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    // <div>
    //   {/*<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} color="primary" disabled/>*/}
    //   <Checkbox
    //     checked={checked}
    //     onChange={e => setChecked(e.target.checked)}
    //     inputProps={{ 'aria-label': 'secondary checkbox' }}
    //   />
    // </div>

    <>
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label="Testing Checkbox"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label="Testing Checkbox"
    />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* Will show: <div className="MuiTypography-root MuiTypography-h2">Welcome to MUI</div>*/}
          <Typography variant="h2" component="div">
            Welcome to MUI
          </Typography>
          {/* Will show: <h6 className="MuiTypography-root MuiTypography-subtitle1">Learn how to use Material Ui</h6>*/}
          <Typography variant="subtitle1">
            Learn how to use Material Ui
          </Typography>

          <ButtonStyled />

          <TextField variant="filled" />
          <TextField variant="outlined" color="secondary" type="date" />
          <TextField variant="outlined" color="secondary" type="time" />
          <TextField variant="filled" color="secondary" type="time" label="The Time"/>
          <TextField variant="filled" color="secondary" type="email" label="The Time" value="test@test.com"/>
          <TextField variant="filled" color="secondary" type="email" label="The Time" placeholder="test@test.com"/>
          <br/>

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
    </ThemeProvider>
  );
}

export default App;
