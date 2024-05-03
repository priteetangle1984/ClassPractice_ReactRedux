import "./App.css";
import UseRefPage from "./pages/UseRefPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseContextPage from "./pages/useContext/UseContextPage";
import Welcome from "./pages/Welcome";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/useref" element={<UseRefPage />} />
        <Route path="/usereducer" element={<UseReducerPage />} />
        <Route path="/usecontext" element={<UseContextPage />} />
      </Routes>
    </>
  );
}

export default App;
