import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/actions/categories';
import { getShops } from '../store/actions/shops';
import CategoryList from '../components/category/CategoryList';
import CardList from '../components/card/CardList';

const ItemListPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const shops = useSelector((state: any) => state.shops.shops);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getShops());
  }, [dispatch]);

  return (
    <div className="container">
      <CategoryList key={categories.id} categories={categories} />
      <CardList key={shops.id} shops={shops} />
    </div>
  );
};

export default ItemListPage;
