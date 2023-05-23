import {useForm} from 'react-hook-form'
import { userLogin } from '../slices/userSlice'
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import './login.css';

function Login() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(
        (state)=>state.user
      )
    const onFormSubmit=(userCredentialsObject)=>{
         //console.log(userCredentialsObject)
        if(userCredentialsObject.userType=="user"){
            dispatch(userLogin(userCredentialsObject))
        }
        else if(userCredentialsObject.userType=="admin"){
            if(userCredentialsObject.username=="vnrcanteen"){
                if(userCredentialsObject.password=="vnrvjiet"){
                    navigate("/admindashboard");
                }
                else{
                    alert("Invalid password");
                }
            }
            else{
                alert("Invalid username");
            }
        }
      }

      useEffect(()=>{
        if(isSuccess){
        navigate("/userdashboard")
        }
        if(isError){
          console.log(errMsg)
          alert(errMsg)
  
        }
      },[isSuccess,isError,errMsg]);

  return (
    <div>
        <div className="container mt-5 zx">
        <div className="card w-75 mx-auto a1">
        <div className="card-body">
        <h1 className="text-center text-light b1">Login</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="user" {...register("userType",{required:true})}/>
  <label className="form-check-label text-light" for="flexRadioDefault1">
    user
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="admin" {...register("userType",{required:true})}/>
  <label className="form-check-label text-light" for="flexRadioDefault2">
    Admin
  </label>
</div>
            <div>
            <label for="name" className="form-label text-light" placeholder="Enter username">User name</label>
            <input type="text" id="name" className="form-control" {...register("username",{required:true})}></input>
            {errors.username?.type=='required'&&<p className='text-danger'>*username is required</p>}
            </div>
            <div>
            <label for="pass" className="form-label text-light" placeholder="Enter password">Password</label>
            <input type="password" id="pass" className="form-control" {...register("password",{required:true})}></input>
            {errors.password?.type=='required'&&<p className='text-danger'>*password is required</p>}
            </div>
            <div>

            </div>
            <div className='text-center mt-3'>
            <button type="submit" className='btn btn-primary text-light'>login</button>
            </div>
        </form>
        </div>
        </div>
      </div>
      </div>
  );
}

export default Login;