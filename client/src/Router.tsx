import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/smoothie/new" element={<h2>New Smothie</h2>} />
        <Route path="/smoothie/:id" element={<h2>Show Smoothie</h2>} />
        <Route path="/" element={<h2>All Smoothies</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
