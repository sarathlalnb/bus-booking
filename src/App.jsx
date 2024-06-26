import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login'
import Dashboard from './Admin/Dashboard/Dashboard'
import AdminLogin from './Admin/Login/AdminLogin'
import Landing from './Pages/landing/Landing';
import BOLogin from './BusOperator/Login/BOLogin';
import BOHome from './BusOperator/HomePage/BOHome'
import List from './Pages/List/List';
import Profile from './Admin/Profile/Profile';
import ManageUser from './Admin/ManageUser/ManageUser';
import ManageBus from './Admin/ManageBus/ManageBus';
import Busadd from './BusOperator/bus add/Busadd';
import Busprofile from './BusOperator/profile/Busprofile';
import BOManageBus from './BusOperator/ManageBus/BOManageBus';
import Booking from './BusOperator/BookingDetails/Booking';
import Feedback from './BusOperator/Feedback/Feedback';
import BOBusList from './BusOperator/BoBusList/BOBusList';
import AdminFeedback from './Admin/Feedback/AdminFeedback';
import Userprofile from './Pages/profile/Userprofile';
import Bookinghistory from './Pages/Booking history/Bookinghistory';
import UserPayment from './Pages/payment/UserPayment';
import AdminPayment from './Admin/AdminPayment/AdminPayment';
import Home from './Pages/HomePage/Home'
import Mangeoperator from './Admin/Manage operators/Mangeoperator';
import PaymentHistory from './Pages/payment/PaymentHistory';
import Buspayment from './BusOperator/Buspayment/Buspayment';
import AdpaymentHistory from './Admin/Paymentdetails/AdpaymentHistory';
import Allreservation from './Admin/Allreservations/Allreservation';
import Viewfeedback from './Pages/feedbacks/Viewfeedback';
import Pagenotfounf from './Pages/pagenotfound/Pagenotfounf';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        

        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/profile' element={<Profile/>} />
        <Route path='/manageuser' element={<ManageUser/>} />
        <Route path='/managebus' element={<ManageBus/>} />
        <Route path='/admin/feedback' element={<AdminFeedback/>} />
        <Route path='/admin/operator' element={<Mangeoperator/>} />
        {/* <Route path='/admin/payment' element={<AdminPayment/>} /> */}
        <Route path='/admin/paymentHistory' element={<AdpaymentHistory/>} />
        <Route path='/admin/allreservations' element={<Allreservation/>} />



       

        <Route path='/user/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Login register/>} />
        <Route path='/buslist' element={<List/>} />
        <Route path='/bookinghistory' element={<Bookinghistory/>} />
        <Route path='/payment' element={<UserPayment/>} />
        {/* <Route path='/buslist' element={<List/>}/> */}
        <Route path='/profile' element={<Userprofile/>} />
        <Route path='/user/operators' element={<BOBusList/>} />
        <Route path='/user/paymentHistory' element={<PaymentHistory/>} />
        <Route path='/bobuslist' element={<BOBusList/>} />
        <Route path='/user/view/feedbacks' element={<Viewfeedback/>} />
        <Route path="*" element={<Pagenotfounf/>} />


        


        <Route path='/bologin' element={<BOLogin/>} />
        <Route path='/boregister' element={<BOLogin registerpage/>} />
        <Route path='/bohomepage' element={<BOHome/>} />
        <Route path='/bomanagebus' element={<BOManageBus/>} />
        <Route path='/addbus' element={<Busadd/>} />
        <Route path='/bus/profile' element={<Busprofile/>} />
        <Route path='/bookingdetails' element={<Booking/>} />
        <Route path='/bofeedback' element={<Feedback/>} />
        
        <Route path='/bus/payments' element={<Buspayment/>} />


       
        

        


        {/* <Route path='/manageuser' element={<ManageUser/>} />
        <Route path='/managebus' element={<ManageBus/>} /> */}

      </Routes>
    </div>
  );
}

export default App;
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Pages/HomePage/Home'
// import Login from './Pages/Login/Login'
// import Dashboard from './Admin/Dashboard/Dashboard'
// import AdminLogin from './Admin/Login/AdminLogin'
// import Landing from './Pages/landing/Landing';
// import BOLogin from './BusOperator/Login/BOLogin';
// import BOHome from './BusOperator/HomePage/BOHome'
// import List from './Pages/List/List';
// import Profile from './Admin/Profile/Profile';
// import ManageUser from './Admin/ManageUser/ManageUser';
// import ManageBus from './Admin/ManageBus/ManageBus';
// import Busadd from './BusOperator/bus add/Busadd';
// import Busprofile from './BusOperator/profile/Busprofile';
// import BOManageBus from './BusOperator/ManageBus/BOManageBus';



// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<Landing/>} />
//         <Route path='/home' element={<Home/>} />

//         <Route path='/admin' element={<Dashboard/>} />
//         <Route path='/admin/login' element={<AdminLogin/>} />
//         <Route path='/admin/profile' element={<Profile/>} />
//         <Route path='/manageuser' element={<ManageUser/>} />
//         <Route path='/managebus' element={<ManageBus/>} />
       


//         <Route path='/login' element={<Login/>} />
//         <Route path='/register' element={<Login register/>} />
//         <Route path='/buslist' element={<List/>} />

//         <Route path='/bologin' element={<BOLogin/>} />
//         <Route path='/boregister' element={<BOLogin registerpage/>} />
//         <Route path='/bohomepage' element={<BOHome/>} />
//         <Route path='/bomanagebus' element={<BOManageBus/>} />
//         <Route path='/addbus' element={<Busadd/>} />
//         <Route path='/bus/profile' element={<Busprofile/>} />
        




//         {/* <Route path='/manageuser' element={<ManageUser/>} />
//         <Route path='/managebus' element={<ManageBus/>} /> */}

//       </Routes>
//     </div>
//   );
// }

// export default App;
