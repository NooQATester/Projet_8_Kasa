import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home.jsx';
import APropos from '../../pages/APropos.jsx';
import Error from '../../pages/Error.jsx';
import Layout from '../Layout';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
