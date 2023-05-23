import {useForm} from 'react-hook-form'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

function Admindashboard() {
    let [req,setReq]=useState([]);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onFormSubmit=(data)=>{
    axios.post("http://localhost:4000/canteen-api/create-product",data)
    .then((response)=>{
      alert(response.data.message)
    })
    .catch((err)=>{
      alert("Error occured:",err)
    })
    }

    let viewOrders=async()=>{
      let response=await axios.get("http://localhost:4000/canteen-api/get-request");
      setReq(response.data.payload);
      console.log(req);
    }


    return (
      <div>
         <div className="container mt-5">
        <div className="card w-75 mx-auto a1">
        <div className="card-body">
        <h1 className="text-center text-light b1">Add items</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
            <label for="na" className="form-label text-light" placeholder="Enter name">Item</label>
            <input type="text" id="na" className="form-control" {...register("item",{required:true})}></input>
            {errors.item?.type=='required'&&<p className='text-danger'>*Item name is required</p>}
            </div>
            <div>
            <label for="name" className="form-label text-light" placeholder="Enter username">Item Id</label>
            <input type="number" id="name" className="form-control" {...register("id",{required:true})}></input>
            {errors.id?.type=='required'&&<p className='text-danger'>*Id is required</p>}
            </div>
            <div>
            <label for="em" className="form-label text-light" placeholder="Enter email">Price</label>
            <input type="number" id="em" className="form-control" {...register("price",{required:true})}></input>
            {errors.price?.type=='required'&&<p className='text-danger'>*Price is required</p>}
            </div>
            <div className='text-center mt-3'>
              <button type="submit" className='btn text-center text-light bg-primary'>Add Item</button>
            </div>
        </form>
        </div>
        </div>
      </div>


      {req.length!=0?(

      <table className='table mt-5'>
        <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Item</th>
      <th scope="col">Person ordered</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
      <tbody>
  {req.map((d) => {
    return [
        <tr key={req.id}>
          <td>{d.id}</td>
          <td>{d.item}</td>
          <td>{d.name}</td>
          <td>{d.price}</td>
        </tr>
    ];
  })}
</tbody>
</table> 
        )
        :
        (
        <div className='text-center mt-5'>
        <button className='btn text-center text-light bg-primary' onClick={viewOrders}>View orders</button>
        </div>)}
      </div>    
    );
  }
  
  export default Admindashboard;