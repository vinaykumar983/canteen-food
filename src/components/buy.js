import React from 'react';
import {useForm} from 'react-hook-form'

function Buy() {
    
    const {register,handleSubmit,formState:{errors}}=useForm();
    return (
        <div>
            <div className='container d-flex d-block mx-auto ml-4 text-center'>
            <h3><label for="na" className="form-label" placeholder="Enter room">Enter your room no : </label></h3>
            <input type="text" id="na" className="form-control w-25" {...register("Room",{required:true})}></input>
            {errors.name?.type=='required'&&<p className='text-danger'>*Room no. is required</p>}
            </div>
        <div className='text-center'>
        <h2>Make payment here</h2>
            <img src="https://pbs.twimg.com/media/D9G9o7-U0AAX7a6.png"  className='w-25'/>
        </div>
        </div>
    );
}

export default Buy;