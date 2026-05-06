import './App.css';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';

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
        <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton>
        <IconButton color="primary" aria-label="delete"><DeleteIcon /></IconButton>
        <IconButton color="primary" aria-label="add an alarm"><AlarmIcon /></IconButton>
      </div>
    </div>
  );
}

export default App;
