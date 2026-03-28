import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ElementsOfSerenity from './pages/ElementsOfSerenity';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elements-of-serenity" element={<ElementsOfSerenity />} />
      </Routes>
    </Router>
  );
}
