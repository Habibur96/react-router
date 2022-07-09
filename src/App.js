
import './App.css';
// import About from './components/About/About';
// import Friends from './components/Friends/Friends';
// import Home from './components/Home/Home';

import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'

import Friends from './components/Friends/Friends'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

// import CountryDetails from './components/CountryDetails/CountryDetails'
import CountryDetails from './components/CountryDetails/CountryDetails';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <Home></Home>
      <About></About>
      <Friends></Friends> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Friends" element={<Friends></Friends>}></Route>
        <Route path="/Friend/:FriendId" element={<FriendDetail></FriendDetail>}></Route>

        {/* ==================== Using Nexted =================== */}

        <Route path="/posts" element={<Posts></Posts>}>

          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        {/* ==================== Nexted End =================== */}

        <Route path="/About" element={<About></About>}></Route>
        <Route path='/Countries' element={<Countries></Countries>}></Route>

        <Route path='/country/:countryName' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes >
    </div >
  );
}

export default App;
