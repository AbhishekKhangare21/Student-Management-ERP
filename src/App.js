import { Route, Routes } from "react-router-dom";
import AddUser from "./pages/AddUser";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </div>
  );
};

export default App;
