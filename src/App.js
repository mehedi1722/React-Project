import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maincomponent from './Components/Maincomponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Maincomponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
