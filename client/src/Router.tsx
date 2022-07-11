import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/home';
import NewSmoothie from './pages/smoothie/new';
import Page from './components/Page';
import ShowSmoothie from './pages/smoothie/show';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename="smoothie-book">
      <Header />
      <Page>
        <Routes>
          <Route path="/smoothie/new" element={<NewSmoothie />} />
          <Route path="/smoothie/:id" element={<ShowSmoothie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
};

export default Router;
