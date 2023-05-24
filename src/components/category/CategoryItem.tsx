import { useDispatch } from 'react-redux';
import { getShopsByCategory } from '../../store/actions/shops';
import { CategoryItems } from '../../types';
import { useNavigate } from 'react-router';

type CategoryItemProps = {
  categories: CategoryItems;
};

const CategoryItem = ({ categories }: CategoryItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryClick = () => {
    dispatch(
      getShopsByCategory({
        id: categories.id
      })
    );
    navigate(`/?categories=${categories.id}`);
  };

  return (
    <label style={{ cursor: 'pointer' }} onClick={categoryClick}>
      {categories.name}
    </label>
  );
};

export default CategoryItem;
