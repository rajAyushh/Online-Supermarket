import './App.css';
import axios, {isCancel, AxiosError} from 'axios';
import Login from './pages/login';
import { useEffect, useState } from 'react';

function App() {
  let [isLogin, setIsLogin] = useState(false)
  if(!isLogin){
  return (
    <>
    <Login/>
    </>
  );
  }
  else{
    return (
      <>
      This user is Logged In!
      </>
    );
}
}


export default App;
