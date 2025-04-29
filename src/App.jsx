import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.component';
import Profile from './Pages/Profile/Profile.component';
import AddList from './Pages/Add-List/Add-List.component'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add-list" element={<AddList />} />
      </Routes>
    </>
  )
}

export default App;