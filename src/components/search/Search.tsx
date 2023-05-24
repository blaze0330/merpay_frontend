import { useDispatch } from 'react-redux';
import { getShops } from '../../store/actions/shops';

const Search = () => {
  const dispatch = useDispatch();
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getShops(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="search"
      color="black"
      onChange={onKeywordChange}
      style={{
        backgroundColor: 'lightgrey',
        border: 'none  lightgrey',
        borderColor: 'transparent',
        borderRadius: '5px',
        height: '30px',
        width: '300px'
      }}></input>
  );
};

export default Search;
