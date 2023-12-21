import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
