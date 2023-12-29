import './App.css';
import Download from './components/Download';
import { BookProvider } from './components/ContextReducer';
import HomeNav from './components/HomeNav';
import Home from './screens/Home';
import Login from './screens/Login';
import PreLog from './screens/PreLog';
import Register from './screens/Register';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Bookmarklist from './components/Bookmarklist';


function App() {
  return (
    <BookProvider>
    <Router>
      <Routes>
        <Route exact path="/bookmarks" element={<Bookmarklist/>}></Route>
        <Route path='/download' element={<Download/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<PreLog/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        </Routes>
    </Router>
    </BookProvider>
  );
}

export default App;
