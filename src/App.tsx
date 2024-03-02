import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// @ts-ignore
import Header from './components/Header.jsx';
// @ts-ignore
import ParsListPage from './pages/ParsListPage.jsx';
// @ts-ignore
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
