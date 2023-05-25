import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import  Top from './pages/Top';
import  Search from './pages/Search';
import  Estate  from './pages/Estate.jsx';
import Result from './pages/Result.jsx';
import Search_area from './pages/Search_area';
import InfoCard from './components/InfoCard';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Search_area" element={<Search_area />} />
      <Route path="/Estate" element={<Estate />} />
      <Route path="/Result" element={<Result />} />
      {/* <Route path="/Result/:label" component={InfoCard} /> */}
      <Route path="/Result/:label" element={<Result />} />
      <Route path="/Estate/:uid" element={<Estate />} />

    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
