import ItemListHeader from '../../layouts/Header/ItemListHeader';
import { Route, Routes } from 'react-router';

const Header = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListHeader />} />
      <Route path="/detail/:id" element={<div>asdf</div>} />
    </Routes>
  );
};

export default Header;
