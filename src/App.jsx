import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { fetchTodos } from "./redux/ApiReducer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { counter, zero } from "./Store/State.Reducer";
import { useEffect } from "react";

import apiClient from "./Api/apiClient";
import Home from "./Routes/Private/Home";
import Login from "./Routes/Public/Login";
import About from "./Routes/Public/About";
import Protected from "./Routes/Protected";

function App() {
  const dispatch = useDispatch();

  const c = useSelector((state) => state.StateCounter.count);

  function handleClick() {
    dispatch(counter());
  }

  useEffect(() => {
    apiClient.get("/posts").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div className="flex justify-center gap-4 flex-col">
      <h1 className="text-3xl text-center font-bold underline text-red-500">
        React & Tailwind CSS Starter Pack
      </h1>{" "}
      <p className="text-lime-600 bg-yellow-200 text-center">{c}</p>
      <button onClick={handleClick}>Add1</button>
      <button
        onClick={() => {
          dispatch(zero());
        }}
      >
        Zero
      </button>
      <br />
      <br />
      <br />
      <br />
      <Router>
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
