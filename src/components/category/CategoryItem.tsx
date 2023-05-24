import { CategoryItems } from '../../types';

type CategoryItemProps = {
  categoryClick: () => void;
  categories: CategoryItems;
};

const CategoryItem = ({ categories, categoryClick }: CategoryItemProps) => {
  return (
    <label style={{ cursor: 'pointer' }} onClick={categoryClick}>
      {categories.name}
    </label>
  );
};

export default CategoryItem;
