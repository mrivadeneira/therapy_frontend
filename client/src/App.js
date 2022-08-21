import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';

import Register from './containers/Register';
import Login from './containers/Login';

import PatientsDashboard from './containers/PatientsDashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/security/register' element={<Register />} />
      <Route path='/security/login' element={<Login />} />

      <Route path='/patients/dashboard' element={<PatientsDashboard />} />
    </Routes>
  </Router>
  // <div>My app</div>
);

export default App