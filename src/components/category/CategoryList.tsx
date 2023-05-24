import CategoryItem from './CategoryItem';
import { useDispatch } from 'react-redux';
import { getShopsByCategory } from '../../store/actions/shops';
import { CategoryItems } from '../../types';
import { useNavigate } from 'react-router';

type CategoriesProps = {
  categories: CategoryItems[];
};
const CategoryList = ({ categories }: CategoriesProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showAllShops = () => {
    dispatch(getShopsByCategory({ id: null }));
  };

  const categoryClick = (index: number) => {
    dispatch(
      getShopsByCategory({
        id: index + 1
      })
    );
    navigate(`/?categoryId=${index + 1}`);
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
        categories.map((item: CategoryItems, index) => (
          <CategoryItem
            key={item.id}
            categories={item}
            categoryClick={() => categoryClick(index)}
          />
        ))}
      <label style={{ cursor: 'pointer' }} onClick={showAllShops}>
        すべて
      </label>
    </div>
  );
};

export default CategoryList;
