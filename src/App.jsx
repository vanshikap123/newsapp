
import './App.css';
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './page/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
