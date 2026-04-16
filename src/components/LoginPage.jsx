import React, { use, useState } from 'react'
import {useAuth} from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
  
    const [form, setForm] = useState({
      username: "",
      password: "",
    });
  
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // validation
      if (!form.username || !form.password) {
        setError("All fields are required.");
        return;
      }
  
      const success = login(form.username, form.password);
  
      if (success) {
        navigate("/posts"); 
      } else {
        setError("Invalid login.");
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Login
          </h2>
  
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border mb-3 rounded"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border mb-3 rounded"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
  
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
  
          <button className="w-full bg-blue-500 text-white p-2 rounded mt-3">
            Login
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;
