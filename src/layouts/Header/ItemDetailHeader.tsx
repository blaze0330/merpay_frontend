import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faCircleUp,
  faStopCircle
} from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const ItemDetailHeader = () => {
  const shops = useSelector((state: any) => state.shops.shop);

  const navigate = useNavigate();
  const showListsPage = () => {
    navigate('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '20px'
        }}>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          style={{
            width: '20px',
            height: '20px',
            color: 'grey',
            cursor: 'pointer'
          }}
          onClick={showListsPage}
        />

        <FontAwesomeIcon
          icon={faStopCircle}
          style={{
            width: '20px',
            height: '20px',
            color: 'grey',
            cursor: 'pointer'
          }}
        />

        <div style={{ fontSize: '20px' }}>{shops?.name}</div>
        <FontAwesomeIcon
          icon={faCircleUp}
          style={{
            width: '20px',
            height: '20px',
            color: 'grey',
            cursor: 'pointer'
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          border: '1px solid',
          borderColor: 'lightgrey',
          marginBottom: '20px'
        }}></div>
    </>
  );
};

export default ItemDetailHeader;
