import { CardItems } from '../../../types';

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
      }}>
      <div style={{ width: '400px' }}>
        <img src={shop?.image} alt="fail image" style={{ marginBottom: '5px' }} />
        <div style={{ marginBottom: '20px' }}>{shop?.name}</div>
        <div style={{ marginTop: '10px' }}>{shop?.like_count}</div>
        <div>{shop?.description}</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', fontWeight: '20px' }}>{shop?.price}</p>
          {shop?.shipping_fee}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
