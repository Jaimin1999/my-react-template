import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");

    if (login) {
      console.log({ login });
      navigate("/");
    }
  }, [navigate]);

  function login() {
    localStorage.setItem("login", true);
    navigate("/");
  }

  return (
    <div>
      <h1>This is Login Component</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}
