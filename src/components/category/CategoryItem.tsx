import { useDispatch } from 'react-redux';
import { CategoryItems } from '../../types';
import { getShopsByCategory } from '../../store/actions/shops';

type CategoryItemProps = {
  categories: CategoryItems;
};

const CategoryItem = ({ categories }: CategoryItemProps) => {
  const dispatch = useDispatch();

  const categoryClick = () => {
    dispatch(
      getShopsByCategory({
        id: categories.id
      })
    );
  };

  return (
    <label style={{ cursor: 'pointer' }} onClick={categoryClick}>
      {categories.name}
    </label>
  );
};

export default CategoryItem;
