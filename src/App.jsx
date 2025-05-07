import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home.jsx'
import Chemistry from './pages/Chemistry.jsx'
import Geography from './pages/Geography.jsx'
import Reflection from './pages/Reflection.jsx'
import Resources from './pages/Resources.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/Geography" element={<Geography />}/>
        <Route path="/Chemistry" element={<Chemistry />}/>
        <Route path="/Reflection" element={<Reflection />}/>
        <Route path="/Resources" element={<Resources />}/>
      </Routes>
    </Router>
  )
}

export default App