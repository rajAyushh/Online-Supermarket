import './App.css';
import axios, {isCancel, AxiosError} from 'axios';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
