import { CategoryItems } from '../../types';

type CategoryItemProps = {
  categories: CategoryItems;
};

const CategoryItem = ({ categories }: CategoryItemProps) => {
  return <label style={{ cursor: 'pointer' }}>{categories.name}</label>;
};

export default CategoryItem;
