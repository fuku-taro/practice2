import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import  Top from './pages/Top';
import  Search from './pages/Search';
import  Estate  from './pages/Estate.jsx';
import Result from './pages/Result.jsx';
import Search_area from './pages/Search_area';
import InfoCard from './components/InfoCard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Seiyaku from './pages/Seiyaku';
import SeiyakuSearch from './pages/SeiyakuSearch';
import Done from './pages/Done';
import Admin from './pages/Admin';
import AdminRegistration from './pages/AdminRegistration';
import AdminLogin from './pages/AdminLogin';
import Assessment from './pages/Assessment';
import AssessmentContact from './pages/AssessmentContact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Search_area" element={<Search_area />} />
      <Route path="/Estate" element={<Estate />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Seiyaku" element={<Seiyaku />} />
      <Route path="/SeiyakuSearch" element={<SeiyakuSearch />} />
      <Route path="/Done" element={<Done />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/AdminRegistration" element={<AdminRegistration />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/Assessment" element={<Assessment />} />
      <Route path="/AssessmentContact" element={<AssessmentContact />} />
      {/* <Route path="/Result/:label" component={InfoCard} /> */}
      <Route path="/Result/:label" element={<Result />} />
      <Route path="/Estate/:uid" element={<Estate />} />
      <Route path="/Done/:name" element={<Done />} />
      <Route path="/Seiyaku/:name" element={<Seiyaku />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
