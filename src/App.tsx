import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import ItemListPage from './pages/ItemListPage';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
