import React from 'react';
import ItemListHeader from './Header/ItemListHeader';

const Layout: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <div className="layout">
      <ItemListHeader />
      {children}
    </div>
  );
};

export default Layout;
