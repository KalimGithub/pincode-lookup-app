import './App.css';
import Home from './Components/Home';
import Post from './Components/Post'
import {Route, Routes} from 'react-router-dom'

function App() {

  


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/post/:pincode' element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
