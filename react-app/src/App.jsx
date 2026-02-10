import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index";
import "./global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* You can add more routes here in the future */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;