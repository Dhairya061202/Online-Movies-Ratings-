import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import List from './components/list/List';
import Movie from './pages/moviedetail/Movie';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home />}></Route>
          
          <Route  path="movie/:id" element={<Movie />}>
          </Route>
          <Route  path="movies/:type" element={<List />}>
          </Route>
          
          <Route path="/*" element={<h1>Error Page</h1>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
