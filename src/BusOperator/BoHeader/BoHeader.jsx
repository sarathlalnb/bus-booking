import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './BoHeader.css'

function BoHeader() {
    
  const [viewLogout, setViewLogout] = useState(false);
  const [logout, setLogout] = useState("");


const navigate=useNavigate()
  const handleLogout = async (e) => {
    e.preventDefault();
    if (sessionStorage.getItem("token")) {
      setLogout(sessionStorage.removeItem("token"))
      navigate('/bologin')
     
    } else {
      console.log("Existing user not found in sessionStorage");
    }
  }

  const checklogout=()=>{
    if(sessionStorage.getItem('token')){
      setViewLogout(true)
    }
    else{
      setViewLogout(false)
    }
  }

  useEffect(()=>{
    checklogout()
  },[])
  return (
    <>

<Navbar className="nav py-2" expand="lg" fixed="top">
          <Container>

          <Navbar.Brand className='fs-3'>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1036/1036175.png"
              width="50"
              className="d-inline-block align-top me-2"
            />{' '}
              <Link to={'/bohomepage'} className='bus w-75'>Bus<span  style={{color:'brown'}}/* className='hub' */ className='ms-2 '>Hubb</span></Link>
            <p  className='ms-5 mt-3 ps-5 text-center' style={{color:'black'}}> 
            <Link to={'/addbus'} className='ms-4' style={{color:'black',fontSize:'18px'}}>Add Bus</Link>

         <Link to={'/bomanagebus'} className='ms-5'  style={{color:'black',fontSize:'18px'}}>Manage Bus </Link>
         
         <Link to={'/bookingdetails'} className='ms-4' style={{color:'black',fontSize:'18px'}}>Booking History</Link>
         <Link to={'/bus/payments'} className='ms-4' style={{color:'black',fontSize:'18px'}}>Payment History </Link>
         <Link to={'/bofeedback'} className='ms-4' style={{color:'black',fontSize:'18px'}}>Feedback</Link>

         <Link to={'/bus/profile'} className='ms-4' style={{color:'black',fontSize:'18px'}}>Profile </Link>

          </p>
          </Navbar.Brand>

          <Navbar.Toggle/>

          {viewLogout===false?<Link to={'/bologin'} className="justify-content-end">
            <button id='btnnn' className='btn btn-outline-light'>Login or Create Account</button>
          </Link>:
          
          <button id='btnnn' className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
        
          }

          </Container>
      </Navbar>

    </>
  )
}

export default BoHeader