import CategoryItem from './CategoryItem';
import { useDispatch } from 'react-redux';
import { getShops } from '../../store/actions/shops';
import { CategoryItems } from '../../types';

type CategoriesProps = {
  categories: CategoryItems[];
};
const CategoryList = ({ categories }: CategoriesProps) => {
  const dispatch = useDispatch();
  const showAllShops = () => {
    dispatch(getShops());
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: '20px'
      }}>
      {categories.length > 0 &&
        categories.map((item: CategoryItems) => <CategoryItem key={item.id} categories={item} />)}
      <label style={{ cursor: 'pointer' }} onClick={showAllShops}>
        すべて
      </label>
    </div>
  );
};

export default CategoryList;
