import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ForgetPassword/ChangePassword';
import Home from './pages/Home';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Admin/Login';
import { Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/forgot-password/change-password" element={<ChangePassword />}/>

          <Route path='/admin/login' element={<Login />}/>
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />}/>
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
