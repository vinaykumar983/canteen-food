
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Register from './register';
import Login from './login';
import Admindashboard from './admindashboard';
import Userdashboard from './userdashboard';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate,NavLink} from 'react-router-dom'
import {clearLoginStatus} from '../slices/userSlice';
import Buy from './buy';


function Header() {
  let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(
    (state)=>state.user
  )
  let dispatch=useDispatch();
  let navigate=useNavigate()
  const userLogout=()=>{
    localStorage.clear();
    dispatch(clearLoginStatus());
    navigate("/login");
  }
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isSuccess!==true?(
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="">Home</NavLink>
            <NavLink className="nav-link" to="register">Reister</NavLink>
            <NavLink className="nav-link" to="login">Login</NavLink>
            
            {/*<Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>*/}
          </Nav>)
             :(
              <Nav className="ms-auto">
               {/* <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
             <Nav.Link href="/aboutus">About Us</Nav.Link>*/}
             <NavLink className="nav-link" to="">Home</NavLink>
                <Nav.Link onClick={userLogout}>Logout</Nav.Link>
            </Nav>
             )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/admindashboard" element={<Admindashboard/>}/>
            <Route path="/buy" element={<Buy/>}/>
            <Route path="/userdashboard" element={<Userdashboard/>}/>
        </Routes>
    </div>
      </div>    
    );
  }
  
  export default Header;