import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header.jsx';
import ParsListPage from './pages/ParsListPage.jsx';
import ParPage from './pages/ParPage.jsx';



function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
            <Routes>
              <Route path="/" element={<ParsListPage />} />
              <Route path="/par/:armNum" element={<ParPage />} />
            </Routes>
        </div>
      </div>
    </Router>   
  );
}

export default App;
