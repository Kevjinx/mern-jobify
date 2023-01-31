import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { NavBar } from './assets/components';
import { Landing, Register, Dashboard, Error } from './assets/pages'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={< Error />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
