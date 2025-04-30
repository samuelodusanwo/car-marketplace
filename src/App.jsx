import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.component';
import Profile from './Pages/Profile/Profile.component';
import AddList from './Pages/Add-List/Add-List.component'
import NotFound from './components/NotFound/NotFound.component';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-list" element={<AddList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;