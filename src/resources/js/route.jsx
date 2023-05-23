import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Top } from './pages/Top';
import { Search } from './pages/Search';
import  Blog  from './pages/Blog.jsx';
import Result from './pages/Result.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Result" element={<Result />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
