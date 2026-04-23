import { useState } from "react";
import { Link } from 'react-router';
import { useAuth } from "./authWrapper/AuthContext";
import Header from "./common/Header";

function LoginPage() {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login(username);
  }

  return (
    <div>
      <Header />
      <button><Link to='/'>Back</Link></button>
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
<div></div>
        <input
          type="password"
          placeholder="Password"
          /*value={password}*/
          onChange={(e) => setPassword(e.target.value)}
        />

<br></br>
        <button
          type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
