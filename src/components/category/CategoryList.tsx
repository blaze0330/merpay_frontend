import { CategoryItems } from '../../types';
import CategoryItem from './CategoryItem';

type CategoriesProps = {
  categories: CategoryItems[];
};
const CategoryList = ({ categories }: CategoriesProps) => {
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
      <label style={{ cursor: 'pointer' }}>すべて</label>
    </div>
  );
};

export default CategoryList;
