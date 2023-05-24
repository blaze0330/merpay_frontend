import Search from '../../components/search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faClipboard, faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const ItemListHeader = () => {
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
          icon={faClipboard}
          style={{
            width: '20px',
            height: '20px',
            color: 'grey',
            cursor: 'pointer'
          }}
        />

        <Search />

        <FontAwesomeIcon
          icon={faBell}
          style={{
            width: '20px',
            height: '20px',
            color: 'grey',
            cursor: 'pointer'
          }}
        />
        <FontAwesomeIcon
          icon={faCircleCheck}
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
          borderColor: 'lightgrey'
        }}></div>
    </>
  );
};

export default ItemListHeader;
