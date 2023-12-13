import { Route, Routes } from "react-router-dom";
import SimpleLayout from "./layouts/simple";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SimpleLayout />} />
      </Routes>
    </>
  );
}

export default App;
