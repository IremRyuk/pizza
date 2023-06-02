import{Routes,Route} from 'react-router-dom'
import Nav from "./Home Components/Nav";
import Home from "./Pages/Home";
import './Styles/App/app.css'
import Cart from './Home Components/Cart';
import Items from './Home Components/Items';
import Contacts from './Pages/Contacts';


export default function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/food/:Id' element={<Items />} />
    </Routes>
    </div>
  );
}
