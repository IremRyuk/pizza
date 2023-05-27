import{Routes,Route} from 'react-router-dom'
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import './Styles/App/app.css'
import Cart from './Components/Cart';
import Items from './Components/Items';


export default function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/food/:Id' element={<Items />} />
    </Routes>
    </div>
  );
}
