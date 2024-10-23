import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import RootComponent from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RootComponent/>
  </StrictMode>
)