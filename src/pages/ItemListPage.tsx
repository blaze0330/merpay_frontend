import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/actions/categories';
import { getShops, getShopsByCategory } from '../store/actions/shops';
import CategoryList from '../components/category/CategoryList';
import CardList from '../components/card/CardList';
import { useSearchParams } from 'react-router-dom';

const ItemListPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const filteredShops = useSelector((state: any) => state.shops.filteredShops);
  const [searchParams] = useSearchParams();
  const categoryId = useMemo(() => {
    return searchParams.get('categoryId');
  }, [searchParams]);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getShops()).then(() => {
      dispatch(
        getShopsByCategory({
          id: Number(categoryId)
        })
      );
    });
  }, [dispatch]);

  return (
    <div className="container">
      <CategoryList categories={categories} />
      <CardList shops={filteredShops} />
    </div>
  );
};

export default ItemListPage;
