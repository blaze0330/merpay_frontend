import { useNavigate } from 'react-router';
import { CardItems } from '../../types';
import './cardStyle.scss';

type CardItemProps = {
  shops: CardItems;
};

const CardItem = ({ shops }: CardItemProps) => {
  const navigate = useNavigate();

  const cardDetail = () => {
    navigate(`/detail/${shops.id}`);
  };

  return (
    <div className="card_container" style={{ position: 'relative' }} onClick={cardDetail}>
      <div className="card_img">
        <img src={shops.image} alt="fail image" height={200} width={200} />
        <div style={{ margin: '5px 10px' }}>
          {shops.name.length > 20 ? (
            <div>{shops.name.slice(0, 20)}...</div>
          ) : (
            <div>{shops.name}</div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '5px'
            }}>
            <div>{shops.price}</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {/* <img src={heart} alt="heart failed" height={20} width={20} /> */}
              {shops.like_count}
            </div>
          </div>
        </div>
      </div>
      {shops.is_sold_out && (
        <div className="sold">
          <div className="sold_letter">Sold</div>
        </div>
      )}
    </div>
  );
};

export default CardItem;
