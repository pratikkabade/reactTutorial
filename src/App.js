import React from "react";
import Files from "./Files";
import TutorialMain from "./TutorialMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TutorialMain />} />
        <Route path='Files' element={<Files />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
