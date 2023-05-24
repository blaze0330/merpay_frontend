import { CardItems } from '../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

type DetailCardProps = {
  shop?: CardItems;
};

const DetailCard = ({ shop }: DetailCardProps) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
      className="container">
      <div style={{ width: '400px' }}>
        <img src={shop?.image} alt="fail image" style={{ marginBottom: '5px' }} />
        <div style={{ marginLeft: '20px', marginRight: '10px' }}>
          <div style={{ marginBottom: '20px' }}>{shop?.name}</div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                width: '20px',
                height: '20px',
                color: 'grey',
                cursor: 'pointer'
              }}
            />

            <div style={{ marginTop: '10px' }}>{shop?.like_count}</div>
          </div>
          <div>{shop?.description}</div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
            <p style={{ fontSize: '30px', fontWeight: '20px' }}>{shop?.price}</p>
            <p style={{ fontSize: '15px', fontWeight: '5px' }}>{shop?.shipping_fee}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
