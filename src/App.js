import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ForgetPassword/ChangePassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/forgot-password/change-password" element={<ChangePassword />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
