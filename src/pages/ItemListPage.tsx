import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/actions/categories';
import { getShops } from '../store/actions/shops';
import CategoryList from '../components/category/CategoryList';
import CardList from '../components/card/CardList';
import { CardItems } from '../types';

const ItemListPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const shops = useSelector((state: any) => state.shops.shops);
  const filteredShops = useSelector((state: any) => state.shops.filteredShops);
  const id = useSelector((state: any) => state.shops.id);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getShops());
  }, [dispatch]);

  return (
    <div className="container">
      <CategoryList key={categories.id} categories={categories} />
      <CardList key={shops.id} shops={filteredShops} />
    </div>
  );
};

export default ItemListPage;
