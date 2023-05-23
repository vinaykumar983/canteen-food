import {useForm} from 'react-hook-form'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Register() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    let navigate=useNavigate();
    const onFormSubmit=(userObj)=>{
        console.log(userObj)
        axios.post("http://localhost:4000/user-api/create-user",userObj)
        .then((response)=>{
          alert(response.data.message)
          if(response.data.message=="Registeration successful..."){
            navigate("/login")
          }
          console.log(response.data.message)
        })
        .catch((error)=>{
          alert("error occured",error.message)
        })
    }
    return (
      <div>
        <div className="container mt-5">
        
        <div className="card w-75 mx-auto a1">
        <div className="card-body">
        <h1 className="text-center text-light b1">Register</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
            <label for="na" className="form-label text-light" placeholder="Enter name">Name</label>
            <input type="text" id="na" className="form-control" {...register("name",{required:true})}></input>
            {errors.name?.type=='required'&&<p className='text-danger'>*name is required</p>}
            </div>
            <div>
            <label for="name" className="form-label text-light" placeholder="Enter username">User name</label>
            <input type="text" id="name" className="form-control" {...register("username",{required:true,minLength:5})}></input>
            {errors.username?.type=='required'&&<p className='text-danger'>*username is required</p>}
            {errors.username?.type=='minLength'&&<p className='text-danger'>*minimum length of username should be 5</p>}
            </div>
            <div>
            <label for="pass" className="form-label text-light" placeholder="Enter password">Create password</label>
            <input type="password" id="pass" className="form-control" {...register("password",{required:true,minLength:5})}></input>
            {errors.password?.type=='required'&&<p className='text-danger'>*minimum length of password is 5</p>}
            {errors.password?.type=='minLength'&&<p className='text-danger'>*password is required</p>}
            </div>
            <div>
            <label for="em" className="form-label text-light" placeholder="Enter email">Email</label>
            <input type="email" id="em" className="form-control" {...register("email",{required:true})}></input>
            {errors.email?.type=='required'&&<p className='text-danger'>*email is required</p>}
            </div>
            <div className='text-center mt-3'>
              <button type="submit" className='btn text-center text-light bg-primary'>Register</button>
            </div>
        </form>
        </div>
        </div>
      </div>
      </div>    
    );
  }
  
  export default Register;