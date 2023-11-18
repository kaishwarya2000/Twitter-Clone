import {Routes, Route} from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './Store/Auth/Action';


function App() {

  const jwt = localStorage.getItem("jwt")
  const { auth } = useSelector(store => store)
  const dispatch = useDispatch()

  useEffect(() => {

    if (jwt) {
      dispatch(getUserProfile(jwt))
    }
    
  }, [auth.jwt])
  
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={auth.user?<HomePage/>:<Authentication/>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
