import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Homepage/HomePage";
import Playground from "./pages/Playground/Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/play" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
