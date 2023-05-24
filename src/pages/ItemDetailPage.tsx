import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShopById } from '../store/actions/shops';
import { useParams } from 'react-router';
import DetailCard from '../components/card/DetailCard/DetailCard';

const ItemDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const shop = useSelector((state: any) => state.shops.shop);

  useEffect(() => {
    dispatch(getShopById(id));
  }, [dispatch]);

  return <DetailCard shop={shop} />;
};

export default ItemDetailPage;
