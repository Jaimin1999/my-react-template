import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  function loggout() {
    localStorage.removeItem("login");
    navigate("/login");
  }

  return (
    <div>
      <Component />
      <button onClick={loggout}>loggout</button>
    </div>
  );
}

export default Protected;
