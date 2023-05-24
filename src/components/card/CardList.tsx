import { CardItems } from '../../types';
import CardItem from './CardItem';

type CardListProps = {
  shops: CardItems[];
};

const CardList = ({ shops }: CardListProps) => {
  return (
    <div
      style={{
        backgroundColor: 'lightgrey'
      }}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center'
        }}>
        {shops.length > 0 &&
          shops.map((item: CardItems) => <CardItem key={item.id} shops={item} />)}
      </div>
    </div>
  );
};

export default CardList;
