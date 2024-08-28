import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Posts />} />
            <Route path="signin" element={<Form />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
