import './App.css';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const styleArgument = { fontSize: '100px', color: 'red' };

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + "被點了";
};

function App() {
  return (
    <div className="App">
      <h1 style={styleArgument} onClick={changeText}> hello CGU!! </h1>
      <div>
        <IconButton><ShoppingCartIcon /></IconButton>
        <IconButton><DeleteIcon /></IconButton>
        <IconButton><AccessTimeIcon /></IconButton>
      </div>
    </div>
  );
}

export default App;
