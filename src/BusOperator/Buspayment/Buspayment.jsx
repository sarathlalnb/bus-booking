import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getbuspayment } from '../../Services/allAPIs'
import BoHeader from '../BoHeader/BoHeader'

function Buspayment() {
    const[payment,setPayment]=useState([])


    const handlepayment=async()=>{
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Authorization": `Token ${token}`
        }
        const result = await getbuspayment(reqHeader)
        console.log(result)
        setPayment(result.data)
    }
    useEffect(()=>{
        handlepayment()
    },[])
  return (
    <div>  
        <BoHeader/>
    <div >
        <h2 className='text-center  ' style={{marginTop:'7%',marginBottom:'1%'}}> Payment History</h2>
          <Table striped bordered hover >
      <thead >
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Bus Name</th>
          <th>Journey date </th>
          <th>Boarding Point</th>
          <th>Boarding Time</th>
          <th>Droping Point</th>
          <th>Droping time </th>
          <th>Amount</th>
          <th>Payment Date and time </th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
       {payment?.length>0?
       payment.map((item,index)=>(<tr>
        <td>{index+1}</td>
        <td>{item.user_name}</td>
        <td>{item.reservation_data.bus.name}</td>
        <td>{item.reservation_data.journey_date}</td>
        <td>{item.reservation_data.bus.boarding_point}</td>
        <td>{item.reservation_data.bus.boarding_time}</td>
        <td>{item.reservation_data.bus.dropping_point}</td>
        <td>{item.reservation_data.bus.dropping_time}</td>
        <td>{item.amount}</td>
        <td>
                    {/* Splitting payment_time into date and time components */}
                    {item.payment_time.split('T')[0]} {/* Date Component */}
                    {' '}
                    {item.payment_time.split('T')[1].slice(0, -1)} {/* Time Component */}
                </td>
        <td>{item.payment_status}</td>
      </tr>)) : <p>no payment history for you</p> }
       
      </tbody>
    </Table>
    </div></div>
  )
}

export default Buspayment