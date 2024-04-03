///npm i react-currency-format
///npm i shortid
import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import { auth } from './firbase'
import { useAuth } from './context/GlobalState'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Payment from './components/payment/Payment'
function App() {
  const { dispatch } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (

    <div className="app">

<Routes>
<Route path='/' element={<>
<Header/>
  <Home/>
</>}/>
<Route path="/checkout" element={<><Header /><Checkout/></>}/>
<Route path="/payment" element={<><Header /><Payment/></>}/>
<Route path='*' element={<h1>Pageeeeeeee Not Found</h1>}/>
<Route path='/login' element={<Login/>}/>

  </Routes>   
   </div>

  )
}

export default App