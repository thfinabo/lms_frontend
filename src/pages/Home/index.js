import { toast } from 'react-toastify';
import Button from '../../components/ReusableButton/Button';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const handleLogOut = () =>{
    Cookies.remove('authToken');
    toast.success("User successfully logged out");
    navigate('/login')
  }
  return (
    <div>
      <div>Welcome to the Home Page - Authenticated User</div>
      <div onClick={handleLogOut}>
        <Button type={'button'} name={'Log Out'}/>
      </div>
    </div>
  )
}

export default Home