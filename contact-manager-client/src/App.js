import './App.css';
import Login from './components/login/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signup/signup';
import Table from './components/tableui/table';
import PrivateRoute from './components/auth/PrivateRoute'
import DeleteUi from './components/delete/DeleteUi';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/contacts" element={<PrivateRoute Child={Table} />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;