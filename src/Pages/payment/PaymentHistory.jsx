import React from 'react'
import Table from 'react-bootstrap/Table';


function PaymentHistory() {
  return (
    <div>  
      <h2 className='text-center'>Payment History</h2>
      
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
     
    </tbody>
  </Table></div>
  )
}

export default PaymentHistory