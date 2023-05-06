import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Top } from './pages/Top';
import { Search } from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
