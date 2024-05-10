import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* Add more routes here if needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
