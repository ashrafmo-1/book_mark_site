import { Route, Routes } from "react-router-dom";
import "./App.css";
import Controller from "./controller/Controller";
import Links from "./linkes/Links";
import Form from "./form/Form";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "var(--main_bg)" }}>
      <Controller />
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
