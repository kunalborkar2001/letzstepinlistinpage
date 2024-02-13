
import './App.css';
// import ListCard from './Components/ListCard/ListCard';
import Home from './Pages/Home/Home';
import {hotelData} from './Data/Hotels'

function App() {
  return (
    <div className="App">
      <Home Data = {hotelData} />
    </div>
  );
}

export default App;
