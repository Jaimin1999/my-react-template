import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { fetchTodos } from "./redux/ApiReducer";
import { counter, zero } from "./Store/State.Reducer";
import { useEffect } from "react";

import apiClient from "./Api/apiClient";

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
    </div>
  );
}

export default App;
