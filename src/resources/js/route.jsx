import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { UserLogin } from './pages/UserLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
