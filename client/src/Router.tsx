import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/home';
import Page from './components/Page';
import ShowSmoothie from './pages/smoothie/show';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Page>
        <Routes>
          <Route path="/smoothie/new" element={<h2>New Smothie</h2>} />
          <Route path="/smoothie/:id" element={<ShowSmoothie/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
};

export default Router;
