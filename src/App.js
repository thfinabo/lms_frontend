import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ForgetPassword/ChangePassword';
// import { useContext } from 'react';
// import { AuthContext } from './AuthProvider';
import Home from './pages/Home';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Admin/Login';

function App() {
  // const isAuthenticated = useContext(AuthContext);
  // console.log(isAuthenticated)
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/forgot-password/change-password" element={<ChangePassword />}/>
        </Route>

        <Route>
          <Route path='/admin/login' element={<Login />}/>
        </Route>
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
