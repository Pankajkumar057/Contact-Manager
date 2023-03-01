import Login from './components/login/login'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signup/signup';
import Table from './components/tableui/table';
import PrivateRoute from './components/auth/PrivateRoutes';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/contacts" element={<PrivateRoute Child={Table} />}/>
          {/* <Route path="/contacts" element={<Table />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
