import "./App.css";
import { Route, Routes } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { Thanks } from "./components/Thanks/Thanks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route exact path={"/home"} element={<Home />} />
        <Route exact path={"/thanks"} element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
