import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Staff} from "./components/staff/staff";
import {Waitress} from "./components/salon/waitress";
import {Chef} from "./components/cocina/chef";
import {Login} from "./components/login/login";
import {CommandsSalon} from "./components/salon/commandsSalon";
import {AuthProvider} from "./context/authContext";
import {ProtectedRoute} from "./components/ProtectedRoute";





function App (){

return  (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>

        <Route path="/Meseras" element={
        <ProtectedRoute>
        <Waitress />
        </ProtectedRoute>
        } />

        <Route path="/Chefs" element={
        <ProtectedRoute>
        <Chef />
        </ProtectedRoute>
        } />

        <Route path="/Staff" element={
        <ProtectedRoute>
        <Staff />
        </ProtectedRoute>
      } />

        <Route path="/Ready" element={
        <ProtectedRoute>
        <CommandsSalon />
        </ProtectedRoute>
      } />
      
      </Routes>
    </Router>
  </AuthProvider>
  
  
) 

}

export default App;
