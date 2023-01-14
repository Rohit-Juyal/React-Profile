import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home';
import Reads from './components/Reads';
import Writes from './components/Writes';
import People from './components/People';
import Books from './components/Books';
import Articles from './components/Articles';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='navigation'>
          <h1>Ishant</h1>
          <ul className='nav-bar'>
            <li>
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li>
              <NavLink to="reads/books" className='nav-link'>Reads</NavLink>
            </li>
            <li>
              <NavLink to="writes" className='nav-link'>Writes</NavLink>
            </li>
            <li>
              <NavLink to="people" className='nav-link'>People</NavLink>
            </li>
          </ul>
        </div>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='reads' element={<Reads />}>
          <Route index element={<Books />} />
          <Route path='books' element={<Books />} />
          <Route path='articles' element={<Articles />} />
        </Route>
        <Route path='writes' element={<Writes />}></Route>
        <Route path='people' element={<People />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
