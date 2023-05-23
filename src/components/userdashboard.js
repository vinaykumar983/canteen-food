import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import './userdashboard.css';
import { useNavigate } from 'react-router-dom';
function Userdashboard(){
  let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(
    (state)=>state.user
  )
    let navigate=useNavigate();
    let [items,setItems]=useState([]);
    let [count,setCount]=useState(0);
    let [req,setReq]=useState({});
    let [a1,setA1]=useState([]);
    let [a2,setA2]=useState([]);
    let [l,setL]=useState(0);
    // console.log(count);
    let addCart=(data)=>{
      data.name=userObj.username;
      console.log(data);
        setCount(count+(+(data.price)));
      axios.post("http://localhost:4000/canteen-api/make-request",data)
      .then((response)=>{
       // alert(response.data.message)
      })
      .catch((err)=>{
        alert("Error occured:",err)
      })
    
    }

    let buyItem=()=>{
      navigate("/buy");
    }

    let getItems=async()=>{
    let response=await axios.get("http://localhost:4000/canteen-api/getproducts");
    setItems(response.data.payload);
    setL(items.length);
    setA1([1,2,3,4]);
    setA2([6,8,2,4]);
    console.log(a1);
    console.log(a2);
    console.log(l)
    }
    return (
      <div>
        <h1 className="k2 text-light">Welcome to VNR Canteen</h1>
        <div className='p'>
        <div className='d-inline'>
        {items.length!=0?(
           items.map(data=>(<div><div className="card text-dark k2 mt-3 w-100 p-5" key={data.id}>
  <div className="card-header text-center text-light h3">Item</div>
  
  <div className="card-body">
    <h3 className='text-light'>Item               : {data.item}</h3>
    <h3 className='text-light'>Id                 : {data.id}</h3>
    <h3 className='text-light'>Price              : {data.price}</h3>
    <Button className="btn btn-primary" onClick={()=>addCart(data)}>Buy Item</Button>
  </div>
  </div>
</div>)) 
        )
        :
        (<button className="btn btn-warning d-block mx-auto mt-5" onClick={getItems}>
              Click here to view items
         </button>)}
         </div>
         <div>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>CANTEEN</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Total price</Card.Subtitle>
        <Card.Text>
        <h1>₹{count}</h1>
        </Card.Text>
        <Button className="btn btn-primary" onClick={buyItem}>Buy now</Button>
      </Card.Body>
    </Card>
         </div>
         </div>
      </div>    
    );
  }
  
  export default Userdashboard;