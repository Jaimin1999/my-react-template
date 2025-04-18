import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import "./index.css";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persister = persistStore(store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <App />
    </PersistGate>
  </Provider>
  // </StrictMode>
);
