import { Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import About from './pages/About';
import Home from './pages/Home';
import NewsLetter from './pages/NewsLetter';
import SingleCocktail from './pages/SingleCocktail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="newsletter" element={<NewsLetter />} />
        <Route path="cocktails/:drinkId" element={<SingleCocktail />} />
      </Route>
    </Routes>
  );
};
export default App;
