import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItems";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          View Items
        </Link>
        <Link to="/add" className="nav-link">
          Add Item
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </Router>
  );
}
