import NavBar from './NavBar';
import Home from './Home';
import './index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogDetails } from './BlogDetails';
import Create from './create';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}>  </Route>
          <Route path="/create" element = {<Create/>}>  </Route>
          <Route path="/blogs/:id" element = {<BlogDetails/>}>  </Route>
          <Route path="*" element = {<h1> Error 404, Page not Found</h1>}>  </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
