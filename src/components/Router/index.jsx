import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home.jsx';
import About from '../../pages/About.jsx';
import Error from '../../pages/Error.jsx';
import Layout from '../Layout/index.jsx';
import Properties from '../../pages/Properties.jsx';
import '../../index.css';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties/:id" element={<Properties />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
