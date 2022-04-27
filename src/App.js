import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
import './App.css';
import Header from './components/view/Header/Header';
import Home from './components/view/Home/Home';
import Login from "./components/view/Login/Login";
import Register from "./components/view/Register/Register";
import Dashboard from "./components/view/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="logout" element={<Logout />} /> */}
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
