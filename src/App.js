// useHook
import React,{useEffect, useRef, useState} from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

//component
import Header from "./components/header/Header";

// Route
import Home from './pages/home'
import List from "./pages/list";
import NotFound from "./pages/NotFound/NotFound";
import Login from './pages/login/Login'
import SingUp from './pages/login/SignUp'

// css
import "./App.css";


function App() {

  const [logs, setLogs] = useState(false)

  useEffect(()=>{
    setLogs(logs)
    console.log(logs)
  },[logs])

  return (
   <BrowserRouter>
   <Header logs={logs} setLogs={setLogs}/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<List />}></Route>
      {/* <Route path="" element={}></Route> */}
      {/* <Route path="" element={}></Route> */}
      <Route path="/*" element={<NotFound />}></Route>
      <Route path="/login" element={<Login logs={logs} setLogs={setLogs}/>}></Route>
      <Route path="/join" element={<SingUp />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
