import { useState } from "react";
import {Link} from 'react-router';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          <Link to="/postlist">
          Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
