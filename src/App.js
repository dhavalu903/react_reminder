import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Dashboard from './Dashboard';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout  />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
