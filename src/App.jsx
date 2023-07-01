import './App.css'
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import AddPost from './components/AddPost';


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </>
  )
}

export default App
